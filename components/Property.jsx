import Link from 'next/link';

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
            {title}
        </Link>
    );
};
