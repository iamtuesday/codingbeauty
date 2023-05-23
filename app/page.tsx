import { notFound } from "next/navigation";
import { allPosts } from "@/.contentlayer/generated";
import { BlogGrid } from "@/components/organisms";

async function getDocFromParams() {
  const posts = allPosts;
  if (!posts) notFound;

  return posts;
}

const Home = async () => {
  const posts = await getDocFromParams();

  return (
    <main>
      <BlogGrid posts={posts} />
    </main>
  );
};

export default Home;
