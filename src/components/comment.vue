<template>
    <form action="" @submit.prevent="submitComment">
        <input v-model="newComment.email" class="email-input" type="email" placeholder="Email">
        <textarea v-model="newComment.message" class="message-input" name="" id="" placeholder="Message"></textarea>
        <button class="btn-submit">SUBMIT</button>
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
    background-color: rgb(225, 225, 225);
    padding: 1em;
    display: flex;
    flex-direction: column;
    width: 20em;
    gap: 0.5em;

    & > * {
        padding: 0.5em;
    }

    .email-input, .message-input {
        border: 1px solid #ccc;
    }

    .btn-submit {
        width: 6em;
        background: rgb(98, 184, 255);
        font-weight: bold;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border: none;
        border-radius: 0.3em;
        cursor: pointer;
    }


    .message-input {
    resize: none;
    height: 5em;
}
}
</style>