import React, { Component } from "react";
import css from './css/Content.module.css';
import savedPosts from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleChange = (e) => {
        let name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
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
                    this.state.isLoaded?
                    <PostItem posts={this.state.posts} />
                    : <Loader />

                }
               
                


                {
                    // this.state.isLoaded ?
                    //     savedPosts.map(post => {
                    //         // let {title, name, image, description} = post
                    //         return <div className={css.SearchItem} key={post.title}>
                    //             <p>{post.title}</p>
                    //             <p>{post.name}</p>
                    //             <img src={post.image} alt='image'/>
                    //             <p>{post.description}</p>
                    //         </div>
                    //     })
                    //     : <Loader />
                    }
                    {
                    // savedPosts.map((post)=>{
                    //     return <div className={css.SearchItem} key={post.title}>
                    //         <PostItem post={post} />
                    //         <p>{post.title}</p>
                    //         <p>{post.name}</p>
                    //         <img src={post.image} alt='image'/>
                    //         <p>{post.description}</p>
                    //         </div>
                    // })
                    
                    }

                {/* <div className={css.SearchItem}> */}
                    
                {/* </div> */}
    
            </div>
        </div>
        )
    }
}

export default Content