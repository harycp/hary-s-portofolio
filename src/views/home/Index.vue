<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="main-hero">
          <div class="left-side">
            <h1 class="animate__animated animate__lightSpeedInLeft">
              Full-Stack Developer
            </h1>
            <p class="animate__animated animate__fadeInLeft">
              Hello, I'm Hary Capri, a fourth-semester Computer Science student
              at UPN Veteran Jakarta. I'm passionate Web Developer, Front-End,
              Full Stack Developer.
            </p>
          </div>
          <div class="right-side animate__animated animate__fadeInRight">
            <div class="box"></div>
          </div>
        </div>
        <div class="skills animate__animated animate__fadeInLeft">
          <div class="tech">
            <p>Front End</p>
            <ul>
              <li>
                <img
                  src="https://skillicons.dev/icons?i=html,css,bootstrap"
                  alt="skill-icon"
                />
              </li>
              <li>
                <img src="https://skillicons.dev/icons?i=js,vue,react" alt="" />
              </li>
            </ul>
          </div>
          <div class="tech back" style="margin-top: 1rem">
            <p>Back End</p>
            <ul>
              <li>
                <img
                  src="https://skillicons.dev/icons?i=nodejs,express,docker"
                  alt="skill-icon"
                />
              </li>
              <li>
                <img
                  src="https://skillicons.dev/icons?i=mongodb,mysql,java"
                  alt="skill-icon"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="social animate__animated animate__fadeInRight">
          <a href="https://www.linkedin.com/in/hary-capri/" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/harycp" target="_blank"
            ><i class="bi bi-github"></i
          ></a>
        </div>
      </div>
      <Navigation />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: {
    Navigation,
    Footer,
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
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

.main-hero {
  display: flex;
  align-items: center;
  gap: 10rem;
  justify-content: center;
  position: relative;
  margin-bottom: 0rem;
}

.left-side {
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  position: relative;
}

.left-side h1 {
  color: #2d2e32;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.6rem;
  margin-top: 1.6rem;
}

.left-side p {
  color: black;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.6;
}

.box {
  background: url("../../assets/img/photo.png");
  background-color: gray;
  --webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 380px;
  width: 380px;
  box-shadow: 0 20px 5px 5px rgba(0, 0, 0, 0.2);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
}

@keyframes animate {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

.skills {
  justify-content: start;
}
.tech {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 2rem;
}

.skills ul {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  list-style: none;
}

.skills p {
  color: #2d2e32;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: 7rem;
  padding-right: 2rem;
}

.social {
  display: flex;
  gap: 2rem;
  justify-content: end;
  margin-top: 1.6rem;
}

.social i {
  font-size: 2.6rem;
  color: #2d2e32;
  cursor: pointer;
}

.social i:hover {
  color: #a4a4a4;
}

@media (max-width: 990px) {
  .content {
    padding: 4rem 0;
    flex-direction: column-reverse;
    text-align: center;
    height: auto;
    gap: 3rem;
  }

  .main-hero {
    flex-direction: column-reverse;
    text-align: center;
    height: auto;
    gap: 3rem;
  }

  .left-side p {
    margin-bottom: 4rem;
    font-size: 1.2rem;
  }

  .social {
    justify-content: center;
    font-size: 1rem;
  }

  .tech {
    position: initial;
    flex-direction: column;
    align-items: center;
  }

  .back {
    margin-top: 0rem;
  }

  .skills p {
    margin-right: 0;
    margin-bottom: 3rem;
    border-bottom: 2px solid rgb(45, 46, 50, 0.5);
    border-right: none;
    padding-right: 0;
    padding-bottom: 1rem;
    font-size: 1.4rem;
  }

  .skills ul {
    justify-content: center;
    padding-left: 0;
  }

  .social {
    margin-top: 3rem;
  }
}

@media (max-width: 500px) {
  .left-side h1 {
    font-size: 3rem;
  }
  .box {
    width: 280px;
    height: 280px;
  }
}
</style>
