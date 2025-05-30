import dayjs from "dayjs";
import CurrentTime from "./currentTime";

/**
 * Generates a format like "YYYY/M/D/xxxxx" where xxxxx is a short unique string based on the timestamp
 * Example: 2025/1/24/uANZcU4
 */
export default async function Command() {
  const now = dayjs();

  // Format the date part: YYYY/M/D
  const datePath = now.format("YYYY/M/D");

  // Generate a short unique string based on timestamp using base62 encoding
  const base62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Implement base62 encoding manually
  let num = Math.floor(now.valueOf());
  let uniqueId = "";

  // Convert the number to base62
  do {
    uniqueId = base62[num % 62] + uniqueId;
    num = Math.floor(num / 62);
  } while (num > 0);

  // Take the last 6 characters to keep it short
  // uniqueId = uniqueId.slice(-6);

  // Combine the date path and unique ID
  const result = `${datePath}/${uniqueId}`;

  await CurrentTime(result);
}
