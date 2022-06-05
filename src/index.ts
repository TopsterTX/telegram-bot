import { Telegraf, Context } from "telegraf";
import { config } from "dotenv";
import fs from "fs";

import commands from "./commands";
import { Commands } from "./constants/commands";
import { translate } from "./requests/translate";

config();

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not define or invalid");
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Привет, бот ещё в разработке)) не бей"));
commands.forEach(({ name, callback }) => bot.command(name, callback));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.help((ctx) => {
  const fileData = fs.readFileSync("help.txt", { encoding: "utf-8" });
  ctx.reply("В работе");
});
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
process.once("SIGKILL", () => bot.stop("SIGKILL"));
