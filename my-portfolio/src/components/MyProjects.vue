<template>
    <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="pt-5 p-st">
        <div class="container">
            <div class="title1">
                <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >PROJECTS</span
        >
            </div>
            <div class="project-cards mt-4" v-for="item in 5" :key="item">
                <div class="row data-card">
                    <div class="data-card-media col-xl-3 col-bg-3 col-md-3 col-sm-5">
                        <div class="about-image svg">
                            <img src="@/assets/portrait.png" style="width: 200px;" class="img-fluid rounded" alt="svg image">
                        </div>
                    </div>
                    <div class="data-card-content col-xl-9 col-bg-9 col-md-9 col-sm-7">
                        <div class="data-card-header">
                            <div class="data-card-title">
                                <span>HEADER</span>
                            </div>
                        </div>
                        <div class="data-card-description mt-2">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit porro, consectetur eaque ipsa doloribus ad nemo minima aut exercitationem dolore atque id earum? Consequuntur aspernatur sapiente molestiae quo nostrum quisquam.
                            </p>
                        </div>
                        <div class="data-card-tags">
                            <!-- todo -->
                            <span class="badge p-2 mb-2 mt-2"
                            :class="{ 'bg-dark2': nightMode }">
                                React
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    props: {
      nightMode: {
        type: Boolean,
      },
    },
    components:{
    },
    name: "MyProjects",
  };
</script>

<style scoped>
  .badge {
    background-color: rgb(211, 227, 233);
    transition: all 0.5s;
    font-weight: 500;
    border-radius: 1rem;
  }
  .title1 {
    font-size: 24px;
    font-weight: 500;
  }
  .data-card-title{
    font-weight: 500;
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
        .row {
            flex-direction: column-reverse; /* Change to column layout, with the right column on top */
        }
    }
</style>