import Comment from '../models/Comment';

const create = attributes => new Comment(attributes);

export default {
  create,
};
