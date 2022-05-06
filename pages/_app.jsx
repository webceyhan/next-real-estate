import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* some meta tags */}
            </Head>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
