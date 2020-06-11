module.exports = (Schema) => {
  const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    active: { type: Boolean, default: false },
    thumbnail: { type: String },

  }, { timestamps: true });

  return schema;
};