module.exports = (Schema) => {
  const schema = new Schema({
    ticket: { type: Schema.Types.ObjectId, ref: 'Ticket', required: true },
    customers: [{ type: Schema.Types.ObjectId, ref: 'Customer', required: true }], 
  }, { timestamps: true });

  return schema;
};