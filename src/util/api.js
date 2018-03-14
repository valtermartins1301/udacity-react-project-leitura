const SERVER_IP = process.env.REACT_APP_SERVER_IP;
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

export const fetchAllPosts = async () => {
  const url = `http://${SERVER_IP}:${SERVER_PORT}/posts`;
  const options = {
    headers: { Authorization: 'whatever-you-want' },
  };

  const response = await fetch(url, options);

  return response.json();
};

export default {
  fetchAllPosts,
};
