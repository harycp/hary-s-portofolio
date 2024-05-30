<template>
  <div>
    <div class="container">
      <h1
        class="animate__animated animate__fadeInDown"
        style="text-transform: uppercase"
      >
        My Projects
      </h1>
      <div class="project-container animate__animated animate__fadeInLeft">
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
      <Navigation />
    </div>
  </div>
</template>

<script>
import { projects } from "../../data-seeds.js";
import ProjectItem from "../../components/ProjectItem.vue";
import Navigation from "../../components/Navigation.vue";

export default {
  components: {
    ProjectItem,
    Navigation,
  },
  data() {
    return {
      projects: projects,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Urbanist", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fcfcfc;
}

a {
  text-decoration: none;
  color: black;
}
h1 {
  color: #2d2e32;
  font-size: 3.4rem;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 1.6rem;

  text-align: center;
}

.container {
  justify-content: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 6rem;
}

.project-container {
  display: grid;
  grid-gap: 2rem;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

/* Media Queries for Responsiveness */
@media (max-width: 960px) {
  .project-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 740px) {
  .project-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 3rem;
  }
  .project-container {
    grid-template-columns: 1fr;
  }
}
</style>
