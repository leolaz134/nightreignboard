import axios from 'axios';

class  PostService {
    // Fetch all users
    getPosts() {
        return axios.get('http://localhost:9090/posts/getAllPosts');
    }
    
    createPost(post) {
        return axios.post('http://localhost:9090/posts/addPost', post);
    }
}

export default new PostService();

