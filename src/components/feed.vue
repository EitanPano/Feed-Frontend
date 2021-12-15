<template>
    <section>
        <label class="search"
            ><span class="material-icons">search</span
            ><input v-model="filterBy.txt" @input="setFilter" type="search" placeholder="Filter" /></label>
        <ul>
            <li class="comment" v-for="(comment, idx) in feed" :key="idx">
                <img class="gravatar" :src="comment.imgUrl" alt="" />
                <div>
                    <p class="email">{{ comment.email }}</p>
                    <p class="message">{{ comment.message }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: "",
            },
            comments: [
                {
                    imgUrl: "",
                    email: "asd@asd.com",
                    message: "heyhey",
                },
                {
                    imgUrl: "",
                    email: "yosi@asd.com",
                    message: "Hello man",
                },
                {
                    imgUrl: "",
                    email: "mat@asd.com",
                    message: "yoyoyo",
                },
            ],
        };
    },
    methods: {
        setFilter() {
            this.$store.dispatch({ type: "loadFeed", filterBy: this.filterBy });
        },
    },
    computed: {
        feed() {
            return this.$store.getters.feed;
        },
    },
};
</script>
<style scoped lang="scss">
section {
    background: #fff;
    padding: 1.5em 1em 1em

}

.search {
    display: flex;
    border: 1px solid #ccc;
    padding: 0.3em 0.5em;

    input {
        border: none;
        outline: none;
        width: 100%;
    }
}
ul {
    // margin: 0;
    padding: 0;
    .comment {
        display: flex;
        margin-top: 1.5em;
        p {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 2em;
        }

        .email {
            font-weight: bold;
            color: #4f4f4f;
        }

        .message {
            color: #6f6f6f;
        }
    
        .gravatar {
            width: 4em;
            height: 4em;
            background-color: lightskyblue;
            margin-inline-end: 0.5em;
        }
    }

}
</style>
