import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'





export const getPostsList = createAsyncThunk('postslist/getPostsList', async () => {
    const res = await axios.get('https://dummyjson.com/posts')
    return res.data
})

export const PostsSlice = createSlice({
    name: "PostsList",
    initialState: {
        data: [],
        err: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPostsList.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getPostsList.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(getPostsList.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.err = "Error"
            }
        })
    }
})

export default PostsSlice.reducer;
