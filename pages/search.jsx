import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { fetchApi } from '../utils/fetch-api';
import { SearchFilters } from '../components/SearchFilters';
import { Property } from '../components/Property';
import NoResultImg from '../assets/no-result.svg';

export default function Search({ properties }) {
    const router = useRouter();
    const [searchFilters, setSearchFilters] = useState(false);

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilters((prev) => !prev)}
            >
                <Text>Search Propery By Filters</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>

            {searchFilters && <SearchFilters />}

            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>

            <Flex flexWrap="wrap">
                {properties.map((property) => (
                    <Property key={property.id} property={property} />
                ))}
            </Flex>

            {properties.length === 0 && (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    marginTop="5"
                    marginBottom="5"
                >
                    <Image alt="no result" src={NoResultImg} />
                    <Text fontSize="2xl" marginTop="3">
                        No Result Found
                    </Text>
                </Flex>
            )}
        </Box>
    );
}

export async function getServerSideProps({ query }) {
    // define query params
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi('/properties/list', {
        locationExternalIDs,
        categoryExternalID,
        purpose,
        bathsMin,
        roomsMin,
        rentFrequency,
        priceMin: minPrice,
        priceMax: maxPrice,
        areaMax,
        sort,
    });

    return {
        props: {
            properties: data?.hits,
        },
    };
}
