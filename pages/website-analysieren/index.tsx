import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import MultipleTexts from "../../components/MultipleTexts";
import WebsiteAnalysis from "../../components/WebsiteAnalysis";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carbon Content Auditor | Lesbarkeitsindex</title>
        <meta
          name="description"
          content="Mit dem Carbon Content Auditor können Sie den Flesch-Lesbarkeitsindex eines Texts bestimmen. Schnell und unkompliziert."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout linkActive={3}>
        <WebsiteAnalysis></WebsiteAnalysis>
      </Layout>
    </div>
  );
}
