import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/index.js';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await api.fetchPosts();
  return response.data;
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost) => {
    const response = await api.createPost(newPost);
    return response.data;
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, updatedPost }) => {
    const response = await api.updatePost(id, updatedPost);
    return response.data;
  }
);

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await api.deletePost(id);
  return id;
});

export const likePost = createAsyncThunk('posts/likePost', async (id) => {
  console.log(id);
  const response = await api.likePost(id);
  console.log(response.data);
  return response.data;
});

// The slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.findIndex(
          (post) => post._id === action.payload._id
        );
        state[index] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        return state.filter((post) => post._id !== action.payload);
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const index = state.findIndex(
          (post) => post._id === action.payload._id
        );
        state[index] = action.payload;
      });
  },
});

// Export the async actions and reducer
export default postsSlice.reducer;
