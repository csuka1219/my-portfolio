<template>
<footer :class="{'bg-white': !nightMode, 'bg-dark': nightMode }" class="footer">
    <div>
    <img class="copyright-icon" src="@/assets/CopyRight.svg">
    {{ (new Date()).getFullYear() }} Balázs Csuka
    </div>
    <div>
        <MySocialLinks style="float:right"></MySocialLinks>
    </div>
</footer>
</template>
  
<script>
    import MySocialLinks from './helpers/MySocialLinks.vue';

    export default {
    name: 'MyFooter',
    props: {
        nightMode: {
            type: Boolean,
        },
    },
    components: { MySocialLinks }
    }
</script>
  
<style scoped>
.footer {
    padding: 10px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.copyright-icon{
    width: 15px;
}
</style>