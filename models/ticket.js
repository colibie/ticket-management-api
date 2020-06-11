module.exports = (Schema) => {
  const schema = new Schema({
    movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    capacity: { type: Number, required: true, default: 10 },  
    expiry: { type: Date, required: true, min: new Date },
    expired: { type: Boolean, default: false },
    price: { type: Number, required: true },
    type: { type: String, enum: ["REGULAR", "VIP","VVIP"], default: "REGULAR"},    
    movieDate: { type: Date, required: true, min: new Date },
    customers: [{ type: Schema.Types.ObjectId, ref: 'Customer', required: true }],
    sold: { type: Number, default: 0 }
  }, { timestamps: true });

  return schema;
};