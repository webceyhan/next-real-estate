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
        bats,
        area,
        agency,
        description,
        purpose,
        isVerified,
        externalID,
        photos,
    },
}) {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos} />}
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
