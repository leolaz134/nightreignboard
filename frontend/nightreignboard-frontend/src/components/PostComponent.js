import React from 'react';
import PostService from '../service/PostService';
import wylderImage from '../ImagesAndIcons/thumbnail-WYLDER.png';
import revnantImage from '../ImagesAndIcons/revenant-thumbnail.png';

class PostComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            title: "",
            content: ""
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    componentDidMount() {
        PostService.getPosts().then((response) => {
            this.setState({ posts: response.data });
        });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleContentChange(event) {
        this.setState({ content: event.target.value });
    }

    addPost(e) {
        e.preventDefault();
        let post = { title: this.state.title, content: this.state.content };
        PostService.createPost(post).then(res => {
            this.setState(prevState => ({
                posts: [...this.state.posts, res.data],
                title: "",
                content: ""
            }));
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Posts List</h1>
                <img src={wylderImage} alt="RevPng" width="200" height="200" />
                <img src={revnantImage} alt="WylderPng" width="200" height="200" />
                <hr />
                <h2 className="">Make your own Post!</h2>
                <form onSubmit={this.addPost}>
                    <label>
                        Title of Post:  
                        <input 
                        type="text" 
                        name={this.state.title}
                        onChange={this.handleTitleChange}/>
                    </label>
                    <br />
                    <label>
                        Content of Post:  
                        <input 
                        type="text" 
                        name={this.state.content} 
                        onChange={this.handleContentChange}/>
                    </label>
                    <br />
                    <button type="submit"className="btn btn-success" >Add Post</button>
                </form>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Post ID</td>
                            <td>Title</td>
                            <td>Content</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map(
                                post =>
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.content}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default PostComponent;