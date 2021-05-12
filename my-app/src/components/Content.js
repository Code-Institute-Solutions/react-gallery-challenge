import React, { Component } from "react";
import css from './css/Content.module.css';
import savedPosts from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    render () {
        return (
           
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                
            </div>
            <div className={css.SearchResults}>
                {/* <PostItem posts={savedPosts} /> */}
               
                


                {
                    this.state.isLoaded ?
                        savedPosts.map(post => {
                            // let {title, name, image, description} = post
                            return <div className={css.SearchItem} key={post.title}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image} alt='image'/>
                                <p>{post.description}</p>
                            </div>
                        })
                        : <Loader />
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