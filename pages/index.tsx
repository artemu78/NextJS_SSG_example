import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import styled from "styled-components";
import { ThemeContext } from "src/contexts/theme";
import cn from "classnames";

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
  const { theme } = useContext(ThemeContext);
  console.log({ theme });
  const productsList = new Array(20).fill(0, 0, 20).map((item, i) => {
    return (
      <Link key={i} href={`/p/${i + 1}`}>
        <div className={cn(styles.MainPage__product, styles.[`MainPage__${theme}`])}>Dynamic page {i + 1}</div>
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
        <div className={cn(styles.MainPage)}>{productsList}</div>
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
