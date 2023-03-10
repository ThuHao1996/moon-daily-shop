const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const mongooseLeanVirtuals = require("mongoose-lean-virtuals");

const orderDetailsSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 0, min: 0, required: true },
  price: { type: Number, default: 0, min: 0, required: true },
  discount: { type: Number, default: 0, max: 80 },
});

orderDetailsSchema.virtual("totalAmount").get(function () {
  return this.quantity * ((this.price * (100 - this.discount)) / 100);
});

orderDetailsSchema.virtual("product", {
  ref: "Product",
  localField: "productId",
  foreignField: "_id",
  justOne: true,
});

orderDetailsSchema.set("toObject", { virtuals: true });
orderDetailsSchema.set("toJSON", { virtuals: true });

orderDetailsSchema.plugin(mongooseLeanVirtuals);

const OrderDetails = model("OrderDetails", orderDetailsSchema);
module.exports = OrderDetails;
