module.exports = (Schema) => {
  const schema = new Schema({
    movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    capacity: { type: Number, required: true, default: 10 },  
    expiry: { type: Date, required: true, min: new Date() },
    soldOut: { type: Boolean, default: false },
    status: { type: String, enum: ["NEW", "ACTIVE","EXPIRED"], default: "NEW"},
    type: { type: String, enum: ["REGULAR", "VIP","VVIP"], default: "REGULAR"},    
    processed: { type: Boolean, default: false },
    sold: { type: Number, default: 0 }
  }, { timestamps: true });

  return schema;
};