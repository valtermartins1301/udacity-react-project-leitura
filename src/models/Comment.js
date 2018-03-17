class Comment {
  constructor(obj) {
    this.id = obj.id;
    this.parentId = obj.parentId;
    this.timestamp = obj.timestamp;
    this.body = obj.body;
    this.author = obj.author;
    this.voteScore = obj.voteScore;
    this.deleted = obj.deleted;
    this.parentDeleted = obj.parentDeleted;
  }
}

export default Comment;
