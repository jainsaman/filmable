import Head from "next/head";

type HeadProps = {
  title: string;
};

export const CustomHead = ({ title }: HeadProps): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="author" content="Saman jain" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:image" content="" />
      <meta property="og:description" content="" />
    </Head>
  );
};

export default CustomHead;
