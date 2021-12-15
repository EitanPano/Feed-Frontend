<template>
    <form action="" @submit.prevent="submitComment">
        <input v-model="newComment.email" type="email" placeholder="Email">
        <textarea v-model="newComment.message" class="free-text" name="" id="" placeholder="Message"></textarea>
        <button>SUBMIT</button>
    </form>
</template>

<script>
var gravatar = require('gravatar');
export default {

    data() {
        return {
            newComment: {
                imgUrl: "",
                email: "",
                message: "",
            },
        };
    },
    methods: {
        submitComment() {
            this.newComment.imgUrl = gravatar.url(this.newComment.email, {s: '200', r: 'pg', d:'robohash'})
            this.$store.dispatch({type: 'submitComment', newComment: this.newComment})
        }
    }
};
</script>

<style scoped lang="scss">

form {
    & > * {
        padding: 0.5em;
    }

    display: flex;
    flex-direction: column;
    width: 20em;
    gap: 0.5em;

    .free-text {
    resize: none;
    height: 5em;
}
}
</style>