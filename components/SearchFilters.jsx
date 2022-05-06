import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Select } from '@chakra-ui/react';
import { filterData, getFilterValues } from '../utils/filter-data';

export const SearchFilters = () => {
    const router = useRouter();
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filterValues) => {
        const { pathname, query } = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            query[item.name] = item.value;
        });

        router.push({ pathname, query });
    };

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        placeholder={filter.placeholder}
                        w="fit-content"
                        p="2"
                        onChange={(e) =>
                            searchProperties({
                                [filter.queryName]: e.target.value,
                            })
                        }
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    );
};
