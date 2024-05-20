<script setup lang="ts">
//
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <span class="font-bold">B</span>ack<span class="font-bold">S</span>tage
    </div>

    <NuxtLink to="/task">
      Task
    </NuxtLink>


    <NuxtLink to="/products">
      Products
    </NuxtLink>

    <NuxtLink to="/products/new">
      Create product
    </NuxtLink>
  </div>
  <div class="p-10">
    <h2 class="text-xl">Task done by Jovan Kočić</h2>
    <section class="flex gap-2 text-3xl justify-center p-2">
      <NuxtLink to="https://github.com/kochax" target="_blank">
        <UIcon name="i-grommet-icons-github" />
      </NuxtLink>

      <NuxtLink to="https://www.jovankocic.com/" target="_blank">
        <UIcon name="i-grommet-icons-globe" />
      </NuxtLink>

      <NuxtLink to="https://www.linkedin.com/in/jovan-ko%C4%8Di%C4%87-56332b119/" target="_blank">
        <UIcon name="i-grommet-icons-linkedin" />
      </NuxtLink>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply flex flex-col gap-y-8 w-full h-full items-center justify-center;

  &-header {
    @apply text-3xl border-2 p-2 rounded-md w-80 text-center bg-slate-500/50 text-slate-600 border-slate-600 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-300
  }
}
</style>
