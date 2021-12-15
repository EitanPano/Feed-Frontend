import { httpService } from './http-service.js'

export const feedService = {
    query,
    save,
    getEmptyfeed
};

// Debug technique
// window.feedService = feedService;

async function query(filterBy = {}) {
    try {
        let feed = await httpService.get(`feed`,filterBy)
        return feed
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function save(newComment) {
    const comment = await httpService.post(`feed/`, newComment)
    return comment;
}

function getEmptyfeed() {
    return {
        imgUrl:'',
        email:'',
        message:''
    };
}


