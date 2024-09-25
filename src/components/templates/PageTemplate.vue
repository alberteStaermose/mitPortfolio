<template>
  <div>
    <!-- Page template -->
    <div v-for="item in blok.modules" class="module-item">
      Module:
      <img :src="item.media.filename" alt="" />
      <div class="hero-tekst">
        <h1>{{ item.header }}</h1>
        <h2>{{ item.description }}</h2>
      </div>
    </div>

    <div class="gridProjects">
      <div class="projectCard">
        <div class="projectImage">
          <img :src="blok.projects.filename" alt="" />
        </div>
        <div class="hero-tekst">
          <h1>{{ blok.name }}</h1>
          <p>{{ blok.shortDescription }}</p>
        </div>
      </div>
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
.module-item {
  height: 90vh;
  position: relative;
  /* height: 90vh;
  position: absolute;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
  z-index: -20; */

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
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  width: 30vw;
  padding-left: 3rem;

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 1rem;
  }
}
</style>
