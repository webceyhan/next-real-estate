import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';

import DefaultImage from '../assets/house.jpg';

export const Property = ({
    property: {
        externalID,
        coverPhoto,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
    },
}) => {
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex
            flexWrap="wrap"
            justifyContent="flex-start"
            cursor="pointer"
            w="420px"
            p="5"
            pt="0"
            >
                <Box>
                    <Image
                        src={coverPhoto ? coverPhoto.url : DefaultImage}
                        width={400}
                        height={260}
                        alt="house"
                    />
                </Box>
                test
            </Flex>
        </Link>
    );
};
