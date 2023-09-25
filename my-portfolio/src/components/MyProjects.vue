<template>
    <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="pt-5 p-st">
        <div class="container">
            <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
        >
                <span
          class="title text-center"
          :class="{pgray: !nightMode, 'text-light': nightMode }"
          >PROJECTS</span
        >
        <hr
          width="50%"
          :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
        />
            </div>
            <div class="project-cards mt-4" v-for="project in projects" :key="project.title">
                <div class="row data-card">
                    <div class="data-card-media col-xl-3 col-bg-3 col-md-3 col-sm-5">
                        <div class="about-image svg image-container">
                            <img :src="project.media" style="border-radius: 9px;" class="img-fluid rounded" alt="svg image">
                        </div>
                    </div>
                    <div class="data-card-content col-xl-9 col-bg-9 col-md-9 col-sm-7">
                        <div class="data-card-header">
                            <div class="data-card-title">
                                <span>{{ project.title }}</span>
                            </div>
                        </div>
                        <div class="data-card-description mt-2">
                            <p>
                                {{ project.description }}
                            </p>
                        </div>
                        <div class="data-card-tags">
                            <!-- todo -->
                            <span class="badge p-2 mb-2 mt-2" v-for="tag in project.tags"
                            :key="tag" :class="{ 'bg-dark2': nightMode }"
                            style="margin-right: 8px;">
                                {{tag}}
                            </span>
                        </div>
                    </div>
                </div>
                <hr
          :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
        />
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
    name: "MyProjects",
    data(){
        return{
            projects: info.projects,
        }
    }
  };
</script>

<style scoped>
  .badge {
    background-color: rgb(211, 227, 233);
    transition: all 0.5s;
    font-weight: 500;
    border-radius: 1rem;
  }
  .title {
    font-size: 30px;
    font-weight: 500;
  }
  .title1 {
    font-size: 24px;
    font-weight: 500;
  }
  .data-card-title{
    font-weight: 500;
    font-size: 1.5rem;
  }
  .image-container{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 1) 0px -2px 6px 0px inset;
    padding: 9px;
    border-radius: 9px;
  }

  @media (max-width: 576px) {
        .row {
            flex-direction: column-reverse; /* Change to column layout, with the right column on top */
        }
    }
</style>