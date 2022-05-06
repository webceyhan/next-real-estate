import { Box, Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Property } from '../components/Property';
import { fetchApi } from '../utils/fetch-api';

export default function Home({ propsForRent, propsForSale }) {
    return (
        <div>
            <h1>Home Page</h1>
            <Box>
                <Banner
                    purpose="RENT A HOME"
                    title="Rental Homes for"
                    subtitle="Everyone"
                    desc1="Explore from Apartments, builder floors, villas"
                    desc2="and more"
                    linkLabel="Explore Renting"
                    linkUrl="/search?purpose=for-rent"
                    imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
                />

                <Flex wrap>
                    {propsForRent.map((prop) => (
                        <Property key={prop.id} property={prop} />
                    ))}
                </Flex>

                <Banner
                    purpose="BUY A HOME"
                    title="Find, Buy & Own Your"
                    subtitle="Dream Home"
                    desc1="Explore from Apartments, land, builder floors,"
                    desc2="villas and more"
                    linkLabel="Explore Buying"
                    linkUrl="/search?purpose=for-sale"
                    imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
                />

                <Flex wrap>
                    {propsForSale.map((prop) => (
                        <Property key={prop.id} property={prop} />
                    ))}
                </Flex>
            </Box>
        </div>
    );
}

export async function getStaticProps() {
    const propsForSale = await fetchApi('/properties/list', {
        purpose: 'for-sale',
        locationExternalIDs: '5002',
        lang: 'en',
    });

    const propsForRent = await fetchApi('/properties/list', {
        purpose: 'for-rent',
        locationExternalIDs: '5002',
        lang: 'en',
    });

    return {
        props: {
            propsForSale: propsForSale?.hits.slice(0,5),
            propsForRent: propsForRent?.hits.slice(0,5)
        },
        // revalidate: 600, // In seconds
    };
}
