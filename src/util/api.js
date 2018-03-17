import postFactory from '../factories/Post';
import categoryFactory from '../factories/Category';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

const fetchResource = async (resource) => {
  const url = `http://${SERVER_IP}:${SERVER_PORT}/${resource}`;
  const options = {
    headers: { Authorization: 'whatever-you-want' },
  };

  const response = await fetch(url, options);

  return response.json();
};

export const fetchAllPosts = async () => {
  const response = await fetchResource('posts');

  return response.map(item => postFactory.create(item));
};

export const fetchAllCategories = async () => {
  const { categories } = await fetchResource('categories');

  return categories.map(item => categoryFactory.create(item));
};

export default {
  fetchAllPosts,
  fetchAllCategories,
};
