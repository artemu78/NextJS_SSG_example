import "assets/global.css";
import "assets/sfx.css";
import type { AppProps } from "next/app";
import { Theme } from "src/components/Theme";
import { ThemeStore } from "src/contexts/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeStore>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeStore>
  );
}
export default MyApp;
