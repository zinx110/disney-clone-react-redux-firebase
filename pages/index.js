import Head from "next/head";
import Image from "next/image";

import Login from "../components/Login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Disney+ Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="../favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
