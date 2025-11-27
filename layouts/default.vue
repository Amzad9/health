<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow" role="main">
      <slot />
    </main>
    <AppFooter />
    <FloatingButtons />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

