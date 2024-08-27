import { Schema, model, models } from "mongoose";
const ProductSchema = new Schema({
  name: String,
  price: String,
});
const Product = models.Product || model("Product", ProductSchema);
export default Product;
/*const AnimeSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  image: {
    vertical: String,
    horizontal: String,
  },
}); */
