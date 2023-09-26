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
              <button v-for="socialLink in socialLinks" :key="socialLink.name"
                  :class="'btn btn-outline-secondary mx-2 socialContainer ' + socialLink.name"
                  style="padding: 0;"
                  @click="openInNewTab(socialLink.url)"
                  v-tooltip.bottom="'socialLink'"
                  >
                  <img class="socialSvg" :src="require(`@/assets/social/${socialLink.name}.svg`)">
              </button>
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
  export default {
    props: {
      nightMode: {
        type: Boolean,
      },
    },
    methods:{
      openInNewTab(url) {
        window.open(url, '_blank', 'noreferrer');
      },
    },
    name: "MyAbout",
    data() {
      return {
        animatedItems: ["Marvel Sann", "Web Designer", "UI Specialist"],
        description: info.description,
        // socialLinks: ["linkedin", "github", "codersrank", "facebook"],
        socialLinks: [
          {
            name: "linkedin",
            color: "#0a66c2",
            url: "https://www.linkedin.com/in/balázs-csuka-450599213/" 
          },
          {
            name: "github",
            color: "#242c34",
            url: "https://github.com/csuka1219" 
          },
          {
            name: "codersrank",
            color: "#128C7E",
            url: "https://profile.codersrank.io/user/csuka1219"
          },
        ]
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

    /* for all social containers*/
.socialContainer {
  width: 45px;
  height: 45px;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;
}
.linkedin:hover {
  transition-duration: .3s;
  background-color: #0a66c2;
}
.github:hover {
  transition-duration: .3s;
  background-color: #242c34;
}
.codersrank:hover {
  transition-duration: .3s;
  background-color: #128C7E;
}
.facebook:hover {
  transition-duration: .3s;
  background-color: #2753a7;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: .3s;
}

.socialSvg {
  width: 22px;
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
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
    