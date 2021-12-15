<template>
    <section class="home">
        <h1>Hello Home</h1>
        <comment />
        <feed />
    </section>
</template>

<script>
import comment from '../components/comment.vue'
import feed from "../components/feed.vue";
export default {
    name: "Home",
    components: {
        comment,
        feed,
    },
};
</script>
