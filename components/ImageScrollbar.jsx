import Image from 'next/image';
import { useContext } from 'react';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
                d={['none', 'none', 'none', 'block']}
                disabled={isFirstItemVisible}
            />
        </Flex>
    );
};

const RightArrow = () => {
    const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginLeft="1">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
                d={['none', 'none', 'none', 'block']}
                disabled={isLastItemVisible}
            />
        </Flex>
    );
};

export const ImageScrollbar = ({ data }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} key="itemID">
            {data.map((item) => (
                <Box
                    key={item.id}
                    itemID={item.id}
                    width="910px"
                    overflow="hidden"
                    p="1"
                >
                    <Image
                        placeholder="blur"
                        blurDataURL={item.url}
                        src={item.url}
                        width={1000}
                        height={500}
                        alt="property"
                        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                    />
                </Box>
            ))}
        </ScrollMenu>
    );
};
