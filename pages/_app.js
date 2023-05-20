import "global.css";
import { NextIntlProvider } from "next-intl";

export default function App({ Component, pageProps }) {
  return (
    <NextIntlProvider locale="en" messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
