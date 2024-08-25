import { Schema, model, models } from 'mongoose';
const AnimeSchema = new Schema({
  title: { type: String, required: true },
});
const Anime = models.Anime || model('Anime', AnimeSchema);
export default Anime;
