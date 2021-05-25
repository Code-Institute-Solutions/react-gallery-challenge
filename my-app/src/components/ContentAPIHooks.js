import React, { useState, useEffect } from "react";
import css from './css/Content.module.css';
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';


const ContentAPIHooks = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(()=>{
        fetchImages()
    }, []);
    

    // async function fetchImages () {
    //     const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
    //     const fetchedPosts = response.data.hits;
        
    //     setIsLoaded(true);
    //     setPosts(fetchedPosts);
    //     setSavedPosts(fetchedPosts);

    // }

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = response.data.hits;
        
        setIsLoaded(true);
        setPosts(fetchedPosts);
        setSavedPosts(fetchedPosts);

    }

    const handleChange = (e) => {
        let inputText = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.user.toLowerCase().includes(inputText);
        })
        
        setPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchinput'>Search</label>
                    <input 
                    type='search' 
                    id='searchinput' 
                    onChange={(e)=>{handleChange(e)}}
                    />
                    <h4>Posts Found: {posts.length}</h4>
                </form>
                
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItemAPI posts={posts} />
                    : <Loader />

                }  
    
            </div>
        </div>
    )
}

export default ContentAPIHooks