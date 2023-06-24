import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export const getAllPosts = cache(async () => {
  const filepath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filepath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((res) => res.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

// export const getAllPosts = async (): Promise<Post[]> => {
// };

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
  const posts = await getAllPosts();
  const post = posts.find((v) => v.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 메타데이터 정보가 없음 `);
  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filepath, "utf-8");
  return { ...post, content, next, prev };
};
