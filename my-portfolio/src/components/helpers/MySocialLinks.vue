<template>
        <button v-for="socialLink in socialLinks" :key="socialLink.name"
            :class="'btn btn-outline-secondary mx-2 socialContainer ' + socialLink.name"
            style="padding: 0;"
            @click="openInNewTab(socialLink.url)"
            v-tooltip.bottom="'socialLink'"
            >
            <img class="socialSvg" :src="require(`@/assets/social/${socialLink.name}.svg`)">
        </button>
</template>

<script>
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
  name: "MySocialLinks",
  data() {
    return {
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

<style>
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
</style>