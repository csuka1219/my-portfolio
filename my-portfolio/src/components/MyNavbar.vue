<template>
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top p-st"
        :class="{
          'bg-light': !nightMode,
          'navbar-blur': navbarConfig.blur,
          'bg-dark2': nightMode,
        }"
      >
        <div class="container">
          <a
            class="navbar-brand"
            href="/"
            @click.prevent="$emit('scroll', 'home')"
          >
            <MyLogo :nightMode="nightMode" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span style="color: gray; font-size: 23px;"
              ><i class="fas fa-bars"></i
            ></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-2" style="text-align: center;" v-for="navlink in navLinks" :key="navlink">
                <a
                  class="nav-link"
                  href="/{{navlink}}"
                  @click.prevent="$emit('scroll', navlink)"
                  :class="{ 'text-light': nightMode }"
                  >{{navlink}}</a
                >
              </li>
              <li class="nav-item ml-2" style="text-align: center;">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="switchMode"
                  :class="{ 'text-light': nightMode }"
                  ><i
                    :class="{
                      'fas fa-moon': nightMode,
                      'far fa-moon': !nightMode,
                    }"
                    v-tooltip.bottom="nightMode ? 'Light Mode' : 'Night Mode'"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import MyLogo from "./helpers/MyLogo";
  import info from "../../info";
  
  export default {
    name: "NavBar",
    props: {
      nightMode: {
        type: Boolean,
      },
    },
    data() {
      return {
        navbarConfig: info.config.navbar,
        navLinks: ["About", "Resume", "Projects", "Contact"],
      };
    },
    components: {
      MyLogo,
    },
    methods: {
      switchMode() {
        this.$emit("nightMode", !this.nightMode);
      },
    },
  };
  </script>
  
  <style scoped>
  .nav-link {
    font-weight: 500;
  }
  
  button {
    border: none;
    outline: none;
  }
  
  button:hover {
    border: none;
    outline: none;
  }
  
  nav {
    border-bottom: 1px solid rgba(160, 159, 159, 0.336);
    position: fixed !important;
  }
  
  .navbar-blur {
    background-color: #ffffff7e;
    backdrop-filter: blur(12px);
  }
  </style>