// _app.js
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <motion.div
        key={Component}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}
