import Vue from 'vue';
import Vuex from 'vuex';
import { feedService } from '@/services/feed-service.js';

Vue.use(Vuex);

export const feed = {
    state: {
        feed: [],
        filterBy: {
            txt: ''
        }
    },
    getters: {
        feed(state) {
            return state.feed
        },
    },
    mutations: {
        loadFeed(state, {feed}) {
            state.feed = feed;
        },
        setFeed(state, { comment }) {
            state.feed.push(comment);
        },
    },
    actions: {
        async loadFeed({commit}, {filterBy}) {
            try { 
                const feed = await feedService.query(filterBy)
                console.log(feed);
                commit({type: 'loadFeed', feed})
            } catch(err) {
                console.log(err);
            }
        },

        async submitComment({ commit }, { newComment }) {
            try {
                const comment = await feedService.save(newComment);
                commit({ type: 'setFeed', comment });
            } catch (err) {
                console.log(err);
            }
        },
    },
    modules: {},
};
