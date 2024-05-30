<template>
  <div class="navbar-container">
    <nav class="navbar-menu">
      <div class="navbar-menu-link">
        <router-link
          :to="{ name: 'home' }"
          class="navbar-link icon"
          active-class="active-link"
        >
          <i class="bi bi-house-fill"></i>
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          class="navbar-link"
          active-class="active-link"
        >
          About
        </router-link>
        <router-link
          :to="{ name: 'projects' }"
          class="navbar-link"
          active-class="active-link"
        >
          Projects
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="navbar-link"
          active-class="active-link"
        >
          Contact
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Urbanist", sans-serif;
}

.navbar-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-bottom: 0.6rem;
  transform: translateX(-50%);
  background-color: rgba(128, 128, 128, 0.6);
  color: #fff;
  border: 1px solid rgba(128, 128, 128, 0.3);
  border-radius: 0.8rem;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  height: auto;
  min-height: 2.2rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-menu-link {
  display: flex;
}

.navbar-link {
  opacity: 0.8;
  color: #fff;
  padding: 0.3rem 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin: 0 0.5rem;
  vertical-align: top;
}

.navbar-link:hover {
  text-decoration: underline;
  transition: all 2s ease;
}

.active-link {
  font-weight: 1000;
}

@media (max-width: 580px) {
  .navbar-container {
    padding: 0.3rem 0.8rem;
    margin-bottom: 1rem;
  }

  .navbar-link {
    padding: 0.3rem 0.8rem;
    font-size: 1rem;
    margin: 0 0.3rem;
  }

  .navbar-link.icon {
    padding: 0.3rem;
  }
}

@media (max-width: 400px) {
  .navbar-container {
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.5rem;
  }

  .navbar-link {
    padding: 0.2rem 0.5rem;
    font-size: 0.9rem;
    margin: 0 0.2rem;
  }

  .navbar-link.icon {
    padding: 0.2rem;
  }
}
</style>
