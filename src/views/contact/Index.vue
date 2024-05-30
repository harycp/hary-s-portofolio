<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="main-hero">
          <div class="left-side">
            <h1
              class="animate__animated animate__lightSpeedInLeft"
              style="text-transform: uppercase"
            >
              Contact
            </h1>
            <p class="animate__animated animate__fadeInLeft">
              Interested in connecting? feel free to drop me a message via any
              of the contact methods below. I look forward to hearing.
            </p>
            <div class="social animate__animated animate__fadeInLeft">
              <div class="tech">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/hary-capri/"
                      target="_blank"
                    >
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/harycp" target="_blank"
                      ><i class="bi bi-github"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://wa.me/6285174183150" target="_blank"
                      ><i class="bi bi-whatsapp"></i
                    ></a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=2210511023@mahasiswa.upnvj.ac.id"
                      target="_blank"
                      ><i class="bi bi-envelope-fill"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right-side animate__animated animate__fadeInRight">
            <div class="box"></div>
          </div>
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

.content {
  margin-top: 10rem;
  margin-bottom: 10rem;
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
  background: url("../../assets/img/contact.svg");
  --webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
  height: 320px;
  width: 320px;
}

.social {
  justify-content: start;
}
.tech {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 2rem;
}

.social ul {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  list-style: none;
}

.social p {
  color: #2d2e32;
  font-size: 1.6rem;
  font-weight: 400;
  margin-right: 7rem;
  padding-right: 2rem;
}

.social i {
  font-size: 2.6rem;
  color: #2d2e32;
  cursor: pointer;
  margin-right: 1rem;
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
    margin-top: 6rem;
    margin-bottom: 6rem;
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

  .tech {
    position: initial;
    flex-direction: column;
    align-items: center;
  }

  .back {
    margin-top: 0rem;
  }

  .social p {
    margin-right: 0;
    margin-bottom: 3rem;
    border-bottom: 2px solid rgb(45, 46, 50, 0.5);
    border-right: none;
    padding-right: 0;
    padding-bottom: 1rem;
    font-size: 1.4rem;
  }

  .social ul {
    justify-content: center;
    padding-left: 0;
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
  .content {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
}
</style>
