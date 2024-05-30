<template>
  <div class="about">
    <div class="container">
      <div class="content">
        <div class="left-side animate__animated animate__fadeInLeft">
          <img src="../../assets/img/about.jpg" alt="about-img" />
        </div>
        <div class="right-side">
          <h3 class="animate__animated animate__lightSpeedInRight">About Me</h3>
          <h1 class="animate__animated animate__lightSpeedInRight">
            Full Stack Developer
          </h1>
          <h2 class="animate__animated animate__lightSpeedInRight">
            Hary Capri
          </h2>
          <p class="animate__animated animate__lightSpeedInRight">
            I am a passionate Full-Stack Developer skilled in front-end (HTML,
            CSS, JavaScript, Vue.js, React.js) and back-end (Node.js,
            Express.js) technologies. I work with databases like MongoDB and
            MySQL, and tools like Git and Docker.
          </p>
          <br />
          <p class="animate__animated animate__lightSpeedInRight">
            My projects focus on creating efficient, scalable, and user-friendly
            applications. I am eager to collaborate on innovative projects.
          </p>
          <div class="cv animate__animated animate__lightSpeedInRight">
            <p>MY CV</p>
            <a
              href="https://drive.google.com/file/d/1MU99NepgHnnTzSZP52qM6MoIritPO6Gw/view?usp=sharing"
              target="_blank"
              ><i class="bi bi-link-45deg"></i
            ></a>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
export default {
  components: {
    Navigation,
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

.container {
  justify-content: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

.content {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: center;
}

.left-side {
  position: relative;
}

.left-side img {
  border-radius: 1.7rem;
  height: 25rem;
  width: 35rem;
}

.right-side {
  padding-right: 1.5rem;
}

.right-side h3 {
  color: #2d2e32;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.right-side h1 {
  line-height: 1.4;
  font-size: 2.5rem;
  line-height: 1.4;
  font-weight: 800;
}

.right-side h2 {
  font-size: 1.8rem;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 1rem;
}

.right-side p {
  color: black;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
}

.cv {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}

.cv p {
  color: black;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6;
}

.cv i {
  font-size: 1.6rem;
  color: #2d2e32;
}

@media (max-width: 1200px) {
  .left-side img {
    border-radius: 1.7rem;
    height: 20rem;
    width: 30rem;
  }

  .right-side {
    padding-right: 1.5rem;
  }

  .right-side h3 {
    color: #2d2e32;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .right-side h1 {
    line-height: 1.4;
    font-size: 2.2rem;
    line-height: 1.4;
    font-weight: 800;
  }

  .right-side h2 {
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .right-side p {
    color: black;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
  }

  .cv {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
  }

  .cv p {
    color: black;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6;
  }

  .cv i {
    font-size: 1.4rem;
    color: #2d2e32;
  }
}

@media (max-width: 990px) {
  .container {
    padding: 4rem 0;
    margin-bottom: 4rem;
  }
  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
  }

  .left-side {
    position: relative;
  }

  .right-side {
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cv {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }
  .right-side p {
    text-align: center;
  }
}

@media (max-width: 500px) {
  .container {
    margin-bottom: 1rem;
  }
  .left-side img {
    border-radius: 1.7rem;
    height: 10rem;
    width: 20rem;
  }

  .right-side h3 {
    color: #2d2e32;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
    text-transform: uppercase;
  }

  .right-side h1 {
    line-height: 1.4;
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 800;
  }

  .right-side h2 {
    font-size: 1.4rem;
    line-height: 1.4;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .right-side p {
    color: black;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    padding: 0 16px;
  }

  .cv {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0rem;
    padding-top: 1rem;
    padding-bottom: 0;
  }

  .cv p {
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.6;
  }

  .cv i {
    font-size: 1.4rem;
    color: #2d2e32;
  }
}
</style>
