import React from 'react';
import PostService from '../service/PostService';

class PostComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            posts: []
        }
    }

    componentDidMount(){
        PostService.getPosts().then((response) => {
            this.setState({posts: response.data});
        });
    }

    render(){
        return (
            <div>
                <h1 className = "text-center">Posts List</h1>
                <table className = "table table-striped">
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
                                <tr key = {post.id}>
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