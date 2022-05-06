import { Router } from 'next/router';
import nprogress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    nprogress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', nprogress.start);
    Router.events.on('routeChangeComplete', nprogress.done);

    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
