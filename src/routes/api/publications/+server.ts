import { json } from "@sveltejs/kit";
import type { Paper } from "$lib/types";

async function getPapers() {
  let papers: Paper[] = [];

  const paths = import.meta.glob("/src/posts/*paper.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Paper, "slug">;
      const case_study = { ...metadata, slug } satisfies Paper;
      case_study.published && papers.push(case_study);
    }
  }

  papers = papers.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return papers;
}

export async function GET() {
  const papers = await getPapers();
  return json(papers);
}
