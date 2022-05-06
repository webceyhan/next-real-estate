import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { SearchFilters } from '../components/SearchFilters';
import { Property } from '../components/Property';
import Image from 'next/image';
import NoResultImg from '../assets/no-result.svg';

export default function Search() {
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
                {[].map((property) => (
                    <Property key={property.id} property={property} />
                ))}
            </Flex>

            {[].length === 0 && (
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
