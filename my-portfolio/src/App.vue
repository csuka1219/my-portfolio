<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <MyNavbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode"></MyNavbar>

    <div class="parent">
      <MyAbout id="About" :nightMode="nightMode"/>
      <MyResume id="Resume" :nightMode="nightMode"/>
      <MyProjects id="Projects" :nightMode="nightMode"></MyProjects>
      <MyContact id="Contact" :nightMode="nightMode"></MyContact>
      <MyFooter id="Footer" :nightMode="nightMode"></MyFooter>
    </div>
  </div>
</template>

<script>

import MyAbout from "./components/MyAbout.vue";
import MyContact from "./components/MyContact.vue";
import MyFooter from "./components/MyFooter.vue";
import MyNavbar from "./components/MyNavbar.vue"
import MyProjects from "./components/MyProjects.vue";
import MyResume from "./components/MyResume.vue";

export default {
  name: 'App',
  components: {
    MyNavbar,
    MyAbout,
    MyResume,
    MyProjects,
    MyContact,
    MyFooter
},
  data(){
    return{
      nightMode: true
    }
  },
  methods:{
    switchMode(mode) {
      this.nightMode = mode;
    },
    scrollTo(ele) {
      if (ele == "home") {
        var elementPosition = document.getElementById("About").offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      } else {
        console.log(ele);
        elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    },
  }
}
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

.parent {
  margin-top: 38px;
  padding-top: 40px;
  position: relative;
}

.pgray {
  color: #535a5e;
}

.pblue {
  color: #669db3ff;
}

.bg-dark2 {
  background-color: #262c30 !important;
}

.text-light {
  color: #d3d2d2 !important;
}

.p-st {
  transition: all 0.5s !important;
}

/* To set scrollbar width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 9px;
  border: 2px solid white; /* Use your background color instead of White */
  background-clip: content-box;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 9px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: rgb(212, 149, 97);
  color: white;
  border-radius: 8px;
  font-size: 10px;
  /* padding: 5px 10px 4px; */
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: rgb(212, 149, 97);
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 10px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
