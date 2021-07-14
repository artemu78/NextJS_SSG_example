import Head from "next/head";
import Link from "next/link";
import HeaderHelp from "src/components/HeaderHelp/HeaderHelp";
import HeaderMenu from "src/components/HeaderMenu/HeaderMenu";
import HeaderGroups from "src/components/HeaderGroups/HeaderGroups";
import HeaderLinks from "src/components/HeaderLinks/HeaderLinks";
import HeaderInfo from "src/components/HeaderInfo/HeaderInfo";
import styles from "./styles.module.scss";

export default function Home() {
  const productsList = new Array(20).fill(0, 0, 20).map((item, i) => {
    return (
      <Link key={i} href={`/p/${i + 1}`}>
        <div key={i} className={styles.MainPage__product}>
          Product {i + 1}
        </div>
      </Link>
    );
  });
  const brandsList = new Array(30).fill(0, 0, 30).map((item, i) => {
    return (
      <Link key={i} href={`/b/${i + 1}`}>
        <div key={i} className={styles.MainPage__brand}>
          Brand {i + 1}
        </div>
      </Link>
    );
  });
  return (
    <div>
      <Head>
        <title>Screwfix web mockup</title>
        <link
          rel="preload"
          href="/assets/fonts/archivonarrow-bold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <header>
        <HeaderHelp />
        <HeaderMenu />
        <HeaderGroups />
        <HeaderLinks />
        <HeaderInfo />
      </header>
      <main className="Container">
        <hr />
        <div className={styles.MainPage}>{productsList}</div>
        <hr />
        <div className={styles.MainPage}>{brandsList}</div>
        <hr />
      </main>

      <footer></footer>
      {/* <div className={styles.MainPage__overlay} /> */}
    </div>
  );
}
