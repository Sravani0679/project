const PostSchema = new mongoose.Schema({
    desc: {
      type: String,
      required: true,
    },
  });
  module.exports = mongoose.model('Post', PostSchema);