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
            <div class="pb-4 col-md-10 mt-4">
                <button v-for="socialLink in socialLinks" :key="socialLink"
                class="btn btn-outline-secondary mx-2 "
                @click="open(socialLink)"
                v-tooltip.bottom="'socialLink'"
                >
                <i :class="['fab fa-' + socialLink]"></i>
            </button>
          </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-12">
          <div class="about-image svg">
            <img src="@/assets/portrait.png" class="img-fluid" style="border-radius: 50%;" alt="svg image">
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import info from "../../info";
  export default {
    props: {
      nightMode: {
        type: Boolean,
      },
    },
    components:{
    },
    name: "MyAbout",
    data() {
      return {
        animatedItems: ["Marvel Sann", "Web Designer", "UI Specialist"],
        description: info.description,
        socialLinks: ["linkedin", "github"]
      };
    },
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
  </style>
    