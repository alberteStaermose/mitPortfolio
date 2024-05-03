<template>
  <div>
    <div class="hero">
      <img :src="blok.hero.filename" alt="" />
    </div>
    <div class="hero-tekst">
      <h1>{{ blok.name }}</h1>
      <p>{{ blok.shortDescription }}</p>
    </div>
    <!-- <pre>{{ blok }}</pre> -->
  </div>
</template>

<script setup>
//Alle props skal sættes ind på Page.vue ved templaten
defineProps({
  // Hele blokken fra den specifikke template hentes ind
  blok: Object,
});
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 50vh;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-tekst {
  /* Relative for at den bliver vist */
  position: relative;
  color: black;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  text-align: center;
}
</style>
