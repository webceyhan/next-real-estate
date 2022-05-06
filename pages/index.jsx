import { Banner } from '../components/Banner';

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Banner
                purpose="RENT A HOME"
                title="Rental Homes for"
                subtitle="Everyone"
                desc1="Explore from Apartments, builder floors, villas"
                desc2="and more"
                linkLabel="Explore Renting"
                linkUrl="/search?purpose=for-rent"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />

            <Banner
                purpose="BUY A HOME"
                title="Find, Buy & Own Your"
                subtitle="Dream Home"
                desc1="Explore from Apartments, land, builder floors,"
                desc2="villas and more"
                linkLabel="Explore Buying"
                linkUrl="/search?purpose=for-sale"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
            />
        </div>
    );
}
