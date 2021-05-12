import React, { Component } from "react";
import css from './css/Content.module.css';
import savedPosts from '../posts.json';
import PostItem from './PostItem';

class Content extends Component {
    // constructor(props) {
    //     super(props);
    // }

    
    render () {
        return (
           
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
            </div>
            <div className={css.SearchResults}>
                {/* <PostItem posts={savedPosts} /> */}
                {/* <div className={css.SearchItem}> */}
                    {
                        savedPosts.map(post => {
                            // let {title, name, image, description} = post
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt='image'/>
                                <p>{post.description}</p>
                            </div>
                        })
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
                {/* </div> */}
            </div>
        </div>
        )
    }
}

export default Content