import Head from "next/head";
import HeaderHelp from "src/components/HeaderHelp/HeaderHelp";
import HeaderMenu from "src/components/HeaderMenu/HeaderMenu";
import HeaderGroups from "src/components/HeaderGroups/HeaderGroups";
import HeaderLinks from "src/components/HeaderLinks/HeaderLinks";
import HeaderInfo from "src/components/HeaderInfo/HeaderInfo";

import "assets/global.css";
import "assets/sfx.css";
import type { AppProps } from "next/app";
import { Theme } from "src/components/Theme";
import { ThemeProvider } from "src/contexts/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Theme>
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
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
export default MyApp;
