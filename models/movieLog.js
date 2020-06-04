module.exports = (Schema) => {
  const schema = new Schema({
    movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    airDates: [{ type: Date }], 
  }, { timestamps: true });

  return schema;
};