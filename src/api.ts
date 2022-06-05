import axios from "axios";
import { config } from "dotenv";

config();

export const translateApi = axios.create({
  method: "POST",
  baseURL: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.API_TRANSLATE_TOKEN || "",
  },
});

export default axios.create();
