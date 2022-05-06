import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export const Banner = ({
    title,
    subtitle,
    purpose,
    desc1,
    desc2,
    linkUrl,
    linkLabel,
    imageUrl,
}) => {
    return (
        <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            m={10}
        >
            <Image src={imageUrl} width={500} height={300} alt="banner" />
            <Box p={5}>
                <Text color="gray.500" fontSize="sm" fontWeight="medium">
                    {purpose}
                </Text>
                <Text fontSize="3xl" fontWeight="bold">
                    {title}
                    <br />
                    {subtitle}
                </Text>
                <Text color="gray.700" fontSize="lg" py={3}>
                    {desc1}
                    <br />
                    {desc2}
                </Text>
                <Button fontSize="xl" bg="blue.300" color="white">
                    <Link href={linkUrl}>
                        <a>{linkLabel}</a>
                    </Link>
                </Button>
            </Box>
        </Flex>
    );
};
