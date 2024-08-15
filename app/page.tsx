import { test } from "mydep";
import { headers } from "next/headers";

export default function Home() {
  test();
  // Force dynamic route
  return <p>test{[...headers().keys()].length}</p>;
}
