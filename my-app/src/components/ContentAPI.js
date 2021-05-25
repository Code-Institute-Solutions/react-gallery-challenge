import React, { Component } from "react";
import css from './css/Content.module.css';
// import {posts} from '../posts.json';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';

class ContentAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            posts: [],
            savedPosts: []
        }
        
    }

    componentDidMount() {
        this.fetchImages();
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;
    
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts
        })
    }
    

    handleChange = (e) => {
        let inputText = e.target.value.toLowerCase();
        const filteredPosts = this.state.savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(inputText);
        })
        
        this.setState({
            posts: filteredPosts
        })
    }
    
    render () {
        
        return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchinput'>Search</label>
                    <input 
                    type='search' 
                    id='searchinput' 
                    onChange={(e)=>{this.handleChange(e)}}
                    />
                    <h4>Posts Found: {this.state.posts.length}</h4>
                </form>
                
            </div>
            <div className={css.SearchResults}>
                {
                    this.state.isLoaded ?
                    <PostItemAPI posts={this.state.posts} />
                    : <Loader />

                }  
    
            </div>
        </div>
        )
    }
}

export default ContentAPI