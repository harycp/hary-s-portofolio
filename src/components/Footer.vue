<template>
  <div class="footer">
    <div class="container">
      <p class="animate__animated animate__fadeInUp">
        All rights reserved | Copyright © 2024 Hary Capri
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Urbanist", sans-serif;
}

.container {
  justify-content: center;
  width: 100%;
  margin-top: 0rem;
  padding-bottom: 1rem;
  margin-top: 0.2rem;
}

p {
  color: rgb(128, 128, 128);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
}

@media (max-width: 500px) {
  p {
    font-size: 1rem;
    line-height: 1.2;
  }
}
</style>
