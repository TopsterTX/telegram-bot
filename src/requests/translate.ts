import axios from "axios";
import { config } from "dotenv";

config();

import { translateApi } from "../api";

export const translate = async (text: string) => {
  console.log("text", text);

  try {
    const data = {
      q: text,
      target: "ru",
      source: "en",
    };

    const res = await translateApi({
      data: JSON.stringify(data),
    });

    return res;
  } catch (e) {
    console.log("error translate", e);
  }
};
