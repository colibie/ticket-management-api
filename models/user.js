module.exports = (Schema) => {
  const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String},
    email : { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  }, { timestamps: true });

  return schema;
};