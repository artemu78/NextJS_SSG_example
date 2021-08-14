import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HeaderHelp from "src/components/HeaderHelp/HeaderHelp";
import HeaderMenu from "src/components/HeaderMenu/HeaderMenu";
import HeaderGroups from "src/components/HeaderGroups/HeaderGroups";
import HeaderLinks from "src/components/HeaderLinks/HeaderLinks";
import HeaderInfo from "src/components/HeaderInfo/HeaderInfo";
import styles from "./styles.module.scss";
import styled from "styled-components";

const ProductBlock = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid lightgrey;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  color: ${({ theme }: any) => theme.colors.primary};
  background-color: ${({ theme }: any) => theme.colors.background};
  box-sizing: border-box;
  &:hover {
    border: 2px solid darkred;
  }
`;

export default function Home() {
  const productsList = new Array(20).fill(0, 0, 20).map((item, i) => {
    return (
      <Link key={i} href={`/p/${i + 1}`}>
        <ProductBlock>Dynamic page {i + 1}</ProductBlock>
      </Link>
    );
  });
  const brandsList = new Array(30).fill(0, 0, 30).map((item, i) => {
    return (
      <Link key={i} href={`/b/${i + 1}`}>
        <ProductBlock>Static page {i + 1}</ProductBlock>
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
        <div style={{ display: "flex" }}>
          <Image
            loader={({ src }: { src: string }) => src}
            src="/images/palms.jpg"
            alt="Picture of the author"
            width={1920}
            height={433}
          />
        </div>
        <hr />
        <h2>Dynamic pages</h2>
        <div className={styles.MainPage}>{productsList}</div>
        <hr />
        <h2>Static pages</h2>
        <div className={styles.MainPage}>{brandsList}</div>
        <hr />
      </main>

      <footer></footer>
      {/* <div className={styles.MainPage__overlay} /> */}
    </div>
  );
}
