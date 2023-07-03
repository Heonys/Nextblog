import path from "path";
import { readFile } from "fs/promises";

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

export const getAllPost = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((res) => res.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPost = async () => {
  return getAllPost().then((posts) => posts.filter((post) => post.featured));
};

export const getFileName = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPost();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw Error(`${fileName}에 해당하는 메타데이터가 없습니다`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, prev, next };
};
