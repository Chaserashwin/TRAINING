use("blog");

db.posts.insertMany([
  {
    postId: 123456,
    doc_name: "akhbaar",
    views: 8,
  },
  {
    postId: 12346,
    doc_name: "magzine",
    views: 8,
  },
  {
    postId: 12356,
    doc_name: "paper",
    views: 8,
  },
]);

db.posts.updateMany({ postId: 123456 }, { $inc: { views: 1 } });
