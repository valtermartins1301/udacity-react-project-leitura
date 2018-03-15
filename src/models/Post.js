class Post {
  constructor(obj) {
    this.id = obj.id;
    this.timestamp = obj.timestamp;
    this.title = obj.title;
    this.body = obj.body;
    this.author = obj.author;
    this.category = obj.category;
    this.voteScore = obj.voteScore;
    this.deleted = obj.deleted;
  }
}

export default Post;
