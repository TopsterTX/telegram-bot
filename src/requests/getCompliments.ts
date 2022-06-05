import Api from "../api";
import { translate } from "./translate";

export const getCompliment = async () => {
  try {
    const res = await Api.get("https://complimentr.com/api");
    const compliment = res?.data?.compliment;
    if (compliment) {
      return compliment;
    } else {
      throw new Error("compliment is empty");
    }
  } catch (e) {
    // console.log("error", e);
  }
};
