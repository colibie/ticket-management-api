module.exports = (Schema) => {
  const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String},
    email : { type: String, required: true },
    phone: { type: String, required: true },
  }, { timestamps: true });

  return schema;
};