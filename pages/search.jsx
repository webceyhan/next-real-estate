import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { SearchFilters } from '../components/SearchFilters';

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
        </Box>
    );
}
