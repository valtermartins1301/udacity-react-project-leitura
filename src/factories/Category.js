import Category from '../models/Category';

const create = attributes => new Category(attributes);

export default {
  create,
};
