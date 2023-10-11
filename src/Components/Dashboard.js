import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../Store/dashSlice'

const Dashboard = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post)
    console.log(posts)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    console.log(posts.post)

    return (
        <div>
            <h2>List of users</h2>
            {
                posts.loading && <div>Loading..</div>
            }
            {
                !posts.loading && posts.error ? <div>Error:{posts.error}</div> : null
            }

            {
                !posts.loading && posts.post.length ? <div>Post:{posts.post}</div> : null
            }
            <div>{posts.post.id}</div>



            {/* <div class="flex bg-white-200 mx-8">
                <div class="flex-1 w-32 h-32  bg-green-500 mx-6">2</div>
                <div class="flex-1 w-32 h-32  bg-green-500 mx-6">2</div>
                <div class="flex-1 w-32 h-32  bg-green-500 mx-6">2</div>
                <div class="flex-1 w-32 h-32  bg-green-500 mx-6">2</div>
            </div>  
             <div class="flex bg-white-200 my-8 mx-8">
                <div class="flex-1 w-32 h-64  bg-green-500 mx-6">2</div>
                <div class="flex-1 w-32 h-64  bg-green-500 mx-6">2</div>
            </div> 
            <div class="flex bg-white-200 my-8 mx-8">
                <div class="flex-1 w-8 h-32  bg-green-500 mx-6">2</div>
                <div class="flex-1 w-8 h-32  bg-green-500 mx-4">2</div>
                <div class="flex-1 w-8 h-32  bg-green-500 mx-4">2</div>
                <div class="flex-1 w-64 h-32  bg-green-500 mx-4">2</div>
                <div class="flex-1 w-64 h-32  bg-green-500 mx-6">2</div>
            </div>           */}
        </div>
    )
}

export default Dashboard