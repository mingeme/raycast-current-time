import { Clipboard, showHUD } from "@raycast/api";
import dayjs from "dayjs";

export default async function CurrentTime(day: dayjs.Dayjs) {
  await Clipboard.copy(day);
  await showHUD(`Copied ${day} to clipboard`);
}
