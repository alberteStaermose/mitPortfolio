<template>
  <!-- Page
  {{ route.path }}
  <br />
  Fetch from:
  {{ path }}

  <pre>{{ data.story.content.component }}</pre> -->

  <!-- Nu vil jeg deffinerer hvornår de forskellige templates skal rendere -->
  <!-- Ud fra hvilken template siden har kan kan jeg vælge at rendere hvilket komponent jeg har lyst til -->
  <PageTemplate
    v-if="data.story.content.component === 'PageTemplate'"
    :blok="data.story.content"
  />
  <ProjectsTemplate
    v-else-if="data.story.content.component === 'ProjectsTemplate'"
    :blok="data.story.content"
  />
  <!-- <EnAndenTemplate
    v-else-if="data.story.content.component === 'EnAndenTemplate'"
  /> -->

  <!-- Så vil jeg rendere ud fra den data jeg får fra storyblock -->
</template>

<script setup>
// man kan hente information om den route man er på i hvilket som helst komponent
// Det gør man ved først at importere  med useRoute (som er en composable), fordi vi gerne vil bruge routen
import { useRoute } from "vue-router";
//Her henter jeg dataen ind fra storyblokAPI'en, det er SDK'en som giver os denne funktion
import { useStoryblokApi } from "@storyblok/vue";
//
//
//
//
//
//Herunder importerer jeg de forskellige templates
import PageTemplate from "@/components/templates/PageTemplate.vue";
import ProjectsTemplate from "@/components/templates/ProjectsTemplate.vue";

// Så skal man bruge composablen (som faktisk er en funktion)
const route = useRoute();
const storyblokApi = useStoryblokApi();

console.log("route", route);

//Herunder deffinerer jeg at der home siden skal hedde /Home
let path = route.path;
if (route.path === "/") {
  path = "/home";
}

//Her deffinerer vi at vi skal "GET" og hvor vi skal hente det fra "cdn/stories/config"
//Det er sat ind som en await function
const { data } = await storyblokApi.get(`cdn/stories${path}`, {
  version: "draft", //API options - her har vi sat den til at det skal være draft versionen
});

console.log("data", data);
</script>

<style scoped></style>
