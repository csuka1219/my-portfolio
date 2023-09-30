<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="pt-5 p-st">
    <div class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000">
      <div class="row">
        <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
          <div class="about-text">
            <h1 class="text-holder">
              <span class="mr-2 welcome-text">Hey folks!</span>
            </h1>
            <p>{{description}}</p>
            <div class="pb-4 col-md-10 mt-4" style="padding-left: 0;">
              <MySocialLinks></MySocialLinks>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-12">
          <div class="about-image svg pb-5">
            <img src="@/assets/portrait.png" class="img-fluid" style="border-radius: 50%;" alt="svg image">
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import info from "../../info";
import MySocialLinks from "./helpers/MySocialLinks.vue";
  export default {
    props: {
        nightMode: {
            type: Boolean,
        },
    },
    methods: {
        openInNewTab(url) {
            window.open(url, '_blank', 'noreferrer');
        },
    },
    name: "MyAbout",
    data() {
        return {
            description: info.description
        };
    },
    components: { MySocialLinks }
};
  </script>

  <style scoped>
    .welcome-text{
        font-size: 1em;
        font-weight: bold;
    }
    .text-holder{
        margin: 24px 0;
    }
    @media (max-width: 991.5px) {
        .row {
            flex-direction: column-reverse; /* Change to column layout, with the right column on top */
        }
    }

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
  </style>
    