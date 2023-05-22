import { allPosts } from "@/.contentlayer/generated";
import { DocsPageHeader } from "@/components/atoms";
import { Mdx } from "@/components/globals";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allPosts.find((it) => it.slugAsParams === slug);
  if (!doc) {
    notFound();
  }
  return doc;
}

const Page = async ({ params }: PageProps) => {
  const post = await getDocFromParams(params.slug);
  return (
    <main>
      <DocsPageHeader heading={post.title} text={post.description} />
      <Mdx code={post.body.code} />
    </main>
  );
};

export default Page;
