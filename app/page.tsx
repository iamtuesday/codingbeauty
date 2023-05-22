import { FC } from "react";
import { allDocs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

// async function getDocFromParams(slug: string) {
//   const doc = allDocs.find((it) => it.slugAsParams === slug);

//   if (!doc) {
//     notFound;
//   }

//   return doc;
// }

async function getDocFromParams() {
  const doc = allDocs
  if(!doc) notFound

  return doc;
}

const Home = async ({ params }: PageProps) => {
  console.log(params);
  const doc = getDocFromParams();

  return <main>{JSON.stringify(doc)} </main>;
};

export default Home;
