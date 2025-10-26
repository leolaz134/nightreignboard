import axios from 'axios';

class  PostService {
    // Fetch all users
    getPosts() {
        return axios.get('https://nightreignboard.onrender.com/posts/getAllPosts');
    }
    
    createPost(post) {
        return axios.post('https://nightreignboard.onrender.com/posts/addPost', post);
    }
}

export default new PostService();

