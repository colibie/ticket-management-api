module.exports = (Schema) => {
  const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    active: { type: Boolean, default: false },

  }, { timestamps: true });

  return schema;
};