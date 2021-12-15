<template>
    <section>

        <label for="">🔍<input type="text" placeholder="Filter"></label>
        <ul>
            <li class="comment" v-for="(comment, idx) in feed" :key="idx">
                <img class="gravatar" :src="comment.imgUrl" alt="">
                <div>
                    <p>{{ comment.email }}</p>
                    <p>{{ comment.message }}</p>
                </div>
            </li>
        </ul>
    </section>

</template>

<script>
export default {
    data() {
        return {
            comments: [
                {
                    imgUrl: '',
                    email: 'asd@asd.com',
                    message: 'heyhey'
                },
                {
                    imgUrl: '',
                    email: 'yosi@asd.com',
                    message: 'Hello man'
                },
                {
                    imgUrl: '',
                    email: 'mat@asd.com',
                    message: 'yoyoyo'
                },
            ]
        };
    },
    computed: {
        feed() {
            return this.$store.getters.feed
        }
    }
};
</script>
<style scoped lang="scss">

.comment {
    display: flex;
}


.gravatar {
    width: 4em;
    height: 4em;
    background-color: lightskyblue;
}



</style>
