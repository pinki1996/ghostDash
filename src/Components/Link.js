import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Link = ({ posts }) => {
  const url = "http://localhost:2368/ghost/api/v3/content/posts/?key=b037f761aef8ac162bafec57b2"
  const [post, setPost] = useState([]);
  async function getAllBooks() {
    await axios.get(url)
      .then(function (output) {
        setPost(output.data)
        console.log(output.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    getAllBooks()
  }, [])
  return (
    <div >
      <div>

        <div className="container mx-auto py-10">
          <h1 className="text-center text-3xl">My Post Page</h1>
            <h2>{post.id}</h2>
        </div>
        <div>
        {post.id}
         </div>
      </div>

      {/* <div class="flex bg-white-200 my-8 mx-8">
        <div class="flex-1 h-32  bg-green-500 mx-6">2</div>
        <div class="flex-1 w-8 h-64  bg-green-500 mx-4">2</div>
        <div class="flex-1 w-8 h-64  bg-green-500 mx-4">2</div>
      </div> */}


    </div >
  )
}

export default Link