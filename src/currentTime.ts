import { Clipboard, showHUD } from "@raycast/api";
import dayjs from "dayjs";

export default async function CurrentTime(currentTime: dayjs.Dayjs | string) {
  await Clipboard.copy(currentTime);
  await showHUD(`Copied ${currentTime} to clipboard`);
}
