import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  NewPostSliceState,
  addPost,
  setPosts,
} from '../../../redux/Slices/NewPostSlice';
import { get, post } from '../../../utils/methods';
import {GET_POST} from '../../../utils/config'
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state) =>  state?.NewPostSlice);
  console.log('posts :>> ', posts);

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleAddPost = () => {
    const newPost = {
      // Your post data here
      title: 'New Post Title',
      content: 'New Post Content',
    };

    dispatch(addPost(newPost));
  };

  const handleFetchPosts = async () => {
    // Simulate fetching posts from an API
    try {
    const data = await get(GET_POST )
      
    } catch (error) {
      console.log('error :>> ', error);
      
    }

    // dispatch(setPosts(data?.data));











    // 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 16,
  },
});

export default Home;
