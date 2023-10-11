import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('post/fetchPosts', async()=>{
    return await axios.get('http://localhost:2368/ghost/api/v3/content/posts/?key=b037f761aef8ac162bafec57b2')
    .then(response=> response.data)
})

const dashSlice = createSlice({
    name:'post',
    initialState:{
        loading:false,
        post:[],
        error:''
},


    extraReducers:builder=>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state,action)=>{
            state.loading=false
            state.post = action.payload
            state.error = ''
        })
        builder.addCase(fetchPosts.rejected, (state,action) =>{
            state.loading =  false
            state.post = []
            state.error = action.error.message
        })
    }
})

export default dashSlice.reducer