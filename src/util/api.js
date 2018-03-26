import postFactory from '../factories/Post';
import categoryFactory from '../factories/Category';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const fetchResource = async (resource, options) => {
  const url = `http://${SERVER_IP}:${SERVER_PORT}/${resource}`;
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'whatever-you-want',
    },
    ...options,
  };

  const response = await fetch(url, requestOptions);

  return response.json();
};

export const fetchPostsByCategory = async (category) => {
  const response = await fetchResource(`${category}/posts`);

  return response.map(item => postFactory.create(item));
};

export const fetchAllPosts = async () => {
  const response = await fetchResource('posts');

  return response.map(item => postFactory.create(item));
};

export const fetchAllCategories = async () => {
  const { categories } = await fetchResource('categories');

  return categories.map(item => categoryFactory.create(item));
};

export const createPost = ({
  title, body, author, category,
}) => {
  const post = {
    id: Date.now(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category,
  };

  return fetchResource('posts', {
    method: 'POST',
    body: JSON.stringify(post),
  });
};

export default {
  fetchPostsByCategory,
  fetchAllPosts,
  fetchAllCategories,
};
