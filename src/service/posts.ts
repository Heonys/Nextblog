import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

type PostData = Post & { content: string };

export const getAllPosts = async (): Promise<Post[]> => {
  const filepath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filepath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((res) => res.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeturedPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((res) => res.filter((post) => post.featured));
};

export const getNonFeturedPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((res) => res.filter((post) => !post.featured));
};

export const getFileName = async (fileName: string): Promise<PostData> => {
  const filepath = path.join(process.cwd(), "data/posts", `${fileName}.md`);
  const metaData = await getAllPosts().then((res) => res.find((v) => v.path === fileName));

  if (!metaData) throw new Error(`${fileName}에 해당하는 메타데이터 정보가 없음 `);

  const content = await readFile(filepath, "utf-8");
  return { ...metaData, content };
};
