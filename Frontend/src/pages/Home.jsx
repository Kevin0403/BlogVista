import React, {useEffect, useState} from 'react';
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components';

function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((post) => {
            setPosts(post ? post : [])
        })
    
    }, [])

    if(posts.length === 0){
        return (
            <div className='py-8'>
                <Container>
                    <h1 className='text-3xl font-bold'>No posts found</h1>
                </Container>
            </div>
        )
    }



    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home