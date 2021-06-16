import Head from 'next/head';
import { GetStaticPropsContext } from 'next'
import HeaderHelp from 'src/components/HeaderHelp/HeaderHelp';
import HeaderMenu from 'src/components/HeaderMenu/HeaderMenu';
import HeaderGroups from 'src/components/HeaderGroups/HeaderGroups';
import HeaderLinks from 'src/components/HeaderLinks/HeaderLinks';
import HeaderInfo from 'src/components/HeaderInfo/HeaderInfo';

interface IProps {
    id: string;
    datetime: string;
}

export default function Page({id, datetime}: IProps) {
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
            <div><h2>Special Brand {id}</h2></div>
            <time>{datetime}</time>
        </main>
    </div>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = 17;
    const datetime = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString();
    return {
      props: {id, datetime}, // will be passed to the page component as props
      revalidate: 60,
    }
  }
