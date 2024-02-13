import '@/styles/globals.css'

// components
import Layout from '@/components/Layout';
import Transition from '@/components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence>
        <motion.div key={router.route} className='h-full'> 
          <Transition path={router.route}/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence> 
    </Layout>
  )
}
