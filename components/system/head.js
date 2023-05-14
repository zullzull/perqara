import Head from "next/head"

export default function HeadSEO({title}) {
   return (
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
   )
}