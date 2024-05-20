<script lang="ts" setup>
import type { GenericModalAction, GenericModalProps } from './generic-modal.props';

const modal = useModal();

const props = defineProps<GenericModalProps>()

function handleActionClick(action: GenericModalAction) {
    action.handler()
    modal.close()
}

</script>

<template>
    <UModal>
        <UCard>
            <template #header>
                <h1> {{ props.title }} </h1>
            </template>
            <div class="space-y-2">
                <p>{{ props.message }}</p>
            </div>
            <template #footer>
                <div class="flex justify-end">
                    <UButton v-if="props.actionSecondary" @click="handleActionClick(props.actionSecondary)">{{
                        props.actionSecondary.title }}</UButton>
                    <UButton v-if="props.actionPrimary" @click="handleActionClick(props.actionPrimary)">{{
                        props.actionPrimary.title }}</UButton>
                </div>
            </template>
        </UCard>
    </UModal>
</template>

<style></style>