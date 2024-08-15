import { npmVersion } from "drizzle-orm/version";

// console.log(require.resolve("drizzle-orm/version"));
// console.log(process.env.NODE_PATH);
// console.trace(__filename);

export function test() {
  console.log("got version", npmVersion, "expected 0.32.1");
}
