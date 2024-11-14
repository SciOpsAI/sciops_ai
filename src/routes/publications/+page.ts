import type { Paper } from "$lib/types";

export async function load({ fetch }) {
  const response = await fetch("api/publications");
  const papers: Paper[] = await response.json();
  return { papers };
}
