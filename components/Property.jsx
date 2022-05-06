import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { GoVerified } from 'react-icons/go';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';

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
        price,
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
                <Box w="full">
                    <Flex
                        paddingTop="2"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400">
                                {isVerified && <GoVerified />}
                            </Box>
                            <Text fontSize="md" fontWeight="bold">
                                AED {millify(price)}{' '}
                                {rentFrequency && `/${rentFrequency}`}
                            </Text>
                        </Flex>
                        <Box>
                            <Avatar size="sm" src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        w="250px"
                        color="blue.400"
                    >
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)}{' '}
                        <BsGridFill />
                    </Flex>
                    <Text fontSize="lg" >
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    );
};
