import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { MotionProvider } from "@/components/Motion";
export default function App({ Component, pageProps }) {
  return (
    <MotionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionProvider>
  );
}
