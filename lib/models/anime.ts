import { Schema, model, models } from "mongoose";
const AnimeSchema = new Schema({
  images: {
    verticalImage: String,
    horizontalImage: String,
  },
  titles: {
    originalTitle: String,
    enTitle: String,
    esTitle: String,
  },
  synopsis: String,
  airing: Boolean,
  season: String,
  duration: Number,
  year: Number,
  broadcast: {
    day: String,
    mx: String,
    co: String,
    ve: String,
    ar: String,
    es: String,
  },
  genres: [String],
  studios: String,
  streamingService: { siteName: String, animeUrl: String, siteIcon: String },
  doblajeWikiUrl: String,
  voiceActors: [{ voiceActorName: String, wikiUrl: String, character: String }],
});
const Anime = models.Anime || model("Anime", AnimeSchema);
export default Anime;
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
