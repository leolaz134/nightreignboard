import axios from 'axios';

const API_URL = 'http://localhost:9090/api/posts';

class  PostService {
    // Fetch all users
    getPosts() {
        return axios.get(API_URL);
    }
}

export default new PostService();

