<template>
  <div class="content-container">
    <Navigation />
    <NuxtPage />
    <UNotifications />
    <UModals />
  </div>
</template>

<style scoped lang="scss">
.content-container {
  @apply flex w-full justify-center items-center flex-col;
}
</style>