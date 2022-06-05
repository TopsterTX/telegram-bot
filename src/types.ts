import { Context, Middleware } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

export interface ICommand {
  callback: Middleware<Context<Update>>;
  name: string;
}
