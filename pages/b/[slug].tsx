import Head from "next/head";
import { GetStaticPropsContext } from "next";
import HeaderHelp from "src/components/HeaderHelp/HeaderHelp";
import HeaderMenu from "src/components/HeaderMenu/HeaderMenu";
import HeaderGroups from "src/components/HeaderGroups/HeaderGroups";
import HeaderLinks from "src/components/HeaderLinks/HeaderLinks";
import HeaderInfo from "src/components/HeaderInfo/HeaderInfo";
import styled from "styled-components";

interface IProps {
  id: string;
  datetime: string;
}

const Title = styled.h2`
  color: ${({ theme }: any) => theme.colors.primary};
  background-color: ${({ theme }: any) => theme.colors.background};
  border: 1px solid grey;
  padding: 7px;
  margin: 7px;
`;

export default function Page({ id, datetime }: IProps) {
  return (
    <div>
      <Head>
        <title>Screwfix web mockup</title>
      </Head>
      <header>
        <HeaderHelp />
        <HeaderMenu />
        <HeaderGroups />
        <HeaderLinks />
        <HeaderInfo />
      </header>
      <main className="Container">
        <div>
          <Title>Static page {id}</Title>
          this title is styled component &uarr;
        </div>
        <br />
        <section>
          This page was built at <time>{datetime}</time>
        </section>
      </main>
    </div>
  );
}

const getStaticProps = async function (context: GetStaticPropsContext) {
  const id = context?.params?.slug;
  const datetime =
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  return {
    props: { id, datetime }, // will be passed to the page component as props
    revalidate: 60,
  };
};

const getStaticPaths = async function () {
  return {
    paths: [
      // { params: { slug: '1' } },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
      { params: { slug: "4" } },
      { params: { slug: "5" } },
    ],
    fallback: true,
  };
};

export { getStaticPaths, getStaticProps };
