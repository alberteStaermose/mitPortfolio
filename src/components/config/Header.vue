<script setup>
import { computed, reactive } from "vue";

//Her henter jeg dataen ind fra storyblokAPI'en, det er SDK'en som giver os denne funktion
import { useStoryblokApi } from "@storyblok/vue";

//Her er funktionen
const storyblokApi = useStoryblokApi();

const state = reactive({ story: null });

try {
  //Her deffinerer vi at vi skal "GET" og hvor vi skal hente det fra "cdn/stories/config"
  //Det er sat ind som en await function
  const { data } = await storyblokApi.get(`cdn/stories/config`, {
    version: "draft", //API options - her har vi sat den til at det skal være draft versionen
  });
  console.log("data", data);
  state.story = data.story;
} catch (error) {
  console.error(error);
}

const navPrimary = computed(() => state.story?.content?.navPrimary);
</script>

<template>
  <header>
    <div class="nav-bar">
      <nav>
        <router-link to="/">
          <span class="text">AS</span>
        </router-link>
        <!-- Denne sætning viser dataet i browseren - altså en slags console.log -->
        <!-- <pre>{{ navPrimary }}</pre> -->
        <router-link
          class="text"
          v-for="item in navPrimary"
          :to="`/${item.link.cached_url}`"
          >{{ item.label }}</router-link
        >
      </nav>
    </div>
    <!-- <pre>{{ state.story }}</pre> -->
    <!-- <pre>{{ header }}</pre> -->
  </header>
</template>

<style scoped>
.nav-bar {
  z-index: 20;
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
}

nav {
  display: flex;
  gap: 1rem;
}
header {
  position: absolute;
  z-index: 20;
  background-color: rgb(255, 210, 193, 0.5);

  width: 100vw;
}

.text {
  color: black;
  opacity: 1;
}
</style>
