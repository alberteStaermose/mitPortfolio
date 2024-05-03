<script setup>
import Header from "./components/config/Header.vue";
import Footer from "./components/config/Footer.vue";
</script>

<template>
  <Suspense>
    <Header />
  </Suspense>
  <!-- Hello world -->
  <!-- <Home /> -->
  <main>
    <RouterView v-slot="{ Component, route }">
      <Suspense>
        <div>
          <component :is="Component" :key="route.path" />
        </div>
        <template #fallback>Loading...</template>
      </Suspense>
    </RouterView>
  </main>
  <Footer />
</template>

<style scoped></style>
