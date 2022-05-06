import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { GoVerified } from 'react-icons/go';
import { FaBath, FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';

import { fetchApi } from '../../utils/fetch-api';
import { ImageScrollbar } from '../../components/ImageScrollbar';

export default function PropertyDetails({
    property: {
        title,
        price,
        rentFrequency,
        rooms,
        baths,
        area,
        agency,
        description,
        purpose,
        isVerified,
        photos,
        type,
        furnishingStatus,
        amenities,
    },
}) {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos} />}

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

                {/* main options */}
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    w="250px"
                    color="blue.400"
                >
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)}{' '}
                    <BsGridFill />
                </Flex>

                {/* title & description */}
                <Box marginTop="3">
                    <Text fontSize="lg" marginBottom="2" fontWeight="bold">
                        {title}
                    </Text>
                    <Text lineHeight="2" color="gray.600">
                        {description}
                    </Text>
                </Box>

                {/* other specifications */}
                <Flex
                    flexWrap="wrap"
                    textTransform="uppercase"
                    justifyContent="space-between"
                >
                    <Flex
                        justifyContent="space-between"
                        w="400px"
                        borderBottom="1px"
                        borderColor="gray.100"
                        p="3"
                    >
                        <Text>Type</Text>
                        <Text fontWeight="bold">{type}</Text>
                    </Flex>
                    <Flex
                        justifyContent="space-between"
                        w="400px"
                        borderBottom="1px"
                        borderColor="gray.100"
                        p="3"
                    >
                        <Text>Purpose</Text>
                        <Text fontWeight="bold">{purpose}</Text>
                    </Flex>
                    {furnishingStatus && (
                        <Flex
                            justifyContent="space-between"
                            w="400px"
                            borderBottom="1px"
                            borderColor="gray.100"
                            p="3"
                        >
                            <Text>Furnishing Status</Text>
                            <Text fontWeight="bold">{furnishingStatus}</Text>
                        </Flex>
                    )}
                </Flex>

                {/* facilites */}
                <Box>
                    {amenities.length && (
                        <Text fontSize="2xl" fontWeight="black" marginTop="5">
                            Facilites:
                        </Text>
                    )}
                    <Flex flexWrap="wrap">
                        {amenities?.map((item) =>
                            item?.amenities?.map((amenity) => (
                                <Text
                                    key={amenity.text}
                                    fontWeight="bold"
                                    color="blue.400"
                                    fontSize="l"
                                    p="2"
                                    bg="gray.200"
                                    m="1"
                                    borderRadius="5"
                                >
                                    {amenity.text}
                                </Text>
                            ))
                        )}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi('/properties/detail', {
        externalID: id,
    });

    return {
        props: {
            property: data,
        },
    };
}
