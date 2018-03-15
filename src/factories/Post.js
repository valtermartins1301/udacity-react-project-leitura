import Post from '../models/Post';

const create = attributes => new Post(attributes);

export default {
  create,
};
