import { getCompliment } from "./requests/getCompliments";
import { translate } from "./requests/translate";
import { Commands } from "./constants/commands";
import { ICommand } from "./types";

const commands: ICommand[] = [
  {
    name: Commands.compliment,
    callback: async (ctx) => {
      const compliment = await getCompliment();
      console.log(ctx.state);

      const translatedCompliment = await translate(compliment);
      return ctx.reply(
        translatedCompliment?.data?.data?.translations?.translatedText
      );
    },
  },
];

export const hearsCommands: string[] = ["комплименты"];

export default commands;
