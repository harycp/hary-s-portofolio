<template>
  <div class="project">
    <img :src="project.imgURL" :alt="project.name" class="project-image" />
    <div class="project-details">
      <p>{{ project.name }}</p>
      <p class="project-description">{{ project.description }}</p>
    </div>
    <div class="social">
      <a :href="project.url" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-sign-turn-slight-right-fill"></i>
      </a>
      <a :href="project.github" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
.project {
  width: 100%;
  cursor: pointer;
  outline: 2px solid rgba(0, 0, 0, 0.205);
  transition: all 0.15s ease-in;
  border-radius: 8px;
}

.project:hover {
  outline: 2px solid rgba(0, 0, 0, 0.7);
}

.project-image {
  width: 100%;
  border-radius: 8px;
}

.project-details {
  color: #2d2e32;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.2;
  padding: 1rem;
}

.project-description {
  color: black;
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 1.2rem;
}
.social {
  display: flex;
  gap: 0.6rem;
  justify-content: end;
  margin-top: 1.6rem;
  margin-right: 1rem;
}

.social i {
  font-size: 2rem;
  color: #2d2e32;
  cursor: pointer;
}

.social i:hover {
  color: #a4a4a4;
}
</style>
