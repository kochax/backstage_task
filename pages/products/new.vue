<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const toast = useToast()
const modal = useGenericModal()

const productSchema = z.object({
    title: z.string({ message: 'Title is required' }).min(1),
    description: z.string({ message: 'Description is required' }),
    price: z.coerce.number({ message: 'Price is required' }).min(0),
    image: z.coerce.string().optional(),
});

const file = ref<FileList | null>(null)
const isLoading = ref<boolean>(false);
const formState = ref({
    title: undefined,
    description: undefined,
    price: undefined,
    image: undefined
})

type Schema = z.infer<typeof productSchema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
    const validationResult = productSchema.safeParse(event.data);

    if (!validationResult.success) {
        return;
    }

    isLoading.value = true;

    const fileUrl = await uploadFile();

    const { error } = await useFetch('/api/products', {
        method: 'POST',
        body: { ...validationResult.data, image: fileUrl }
    })

    isLoading.value = false;

    if (error) {
        modal.openGenericModal({ title: 'Error', message: 'Product could not be saved', actionPrimary: { title: 'OK', handler: () => { } } })
        return;
    }

    toast.add({ title: 'Saved' })
    navigateTo('/products')
}


function handleFileChanges(files: FileList | null) {
    file.value = files
}

async function uploadFile(): Promise<string | undefined | null> {
    if (file.value) {
        const fd = new FormData()
        fd.append('file', file.value[0])

        const { data: imageUrl, error } = await useFetch('/api/files', {
            method: 'POST',
            body: fd
        })

        if (error.value) {
            modal.openGenericModal({
                title: 'Error',
                message: 'Image was not uploaded, but product still will be saved',
                actionPrimary: { title: 'OK', handler: () => { } }
            })
            return
        }

        return imageUrl.value
    }
}

</script>

<template>
    <div class="min-h-screen flex justify-center w-full md:w-1/2 lg:w-1/2">
        <div class="p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-bold mb-6 text-center">Create Product</h2>
            <UForm :schema="productSchema" :state="formState" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Title" name="title">
                    <UInput v-model="formState.title" />
                </UFormGroup>
                <UFormGroup label="Description" name="description">
                    <UTextarea v-model="formState.description" />
                </UFormGroup>
                <UFormGroup label="Price" name="price">
                    <UInput v-model="formState.price" type="number" />
                </UFormGroup>
                <UFormGroup label="Image" name="image">
                    <InputsFileInput :model-value="file" @update:modelValue="handleFileChanges" />
                </UFormGroup>

                <UButton type="submit" :disabled="isLoading">
                    {{ isLoading ? 'Creating...' : 'Create' }}
                </UButton>
            </UForm>
        </div>
    </div>
</template>
