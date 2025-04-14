import dayjs from "dayjs";
import CurrentTime from "./currentTime";

export default async function Command() {
  await CurrentTime(dayjs().format("YYYYMMDDhhmmss"));
}
