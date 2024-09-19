import person1 from '../../public/download.jpg';
import person2 from '../../public/download (1).jpg';
import person3 from '../../public/download (2).jpg';
import RatingStars from '../components/RatingStars';
import { Fragment } from 'react/jsx-runtime';
import butterChicken from '../../public/butterchicken.jpg';
import tikkaMasala from '../../public/33meqsb_chicken-tikka_625x300_08_July_22.png';
import biryani from '../../public/biryani.webp';
import Chaat from '../../public/aloo-sev-puri-popular-indian-600nw-2077613761.webp';
import { useState } from 'react';

type BannerImage = {
    id: number;
    img: string;
    desc: string;
    price: number;
};

const ImageArray: BannerImage[] = [
    { id: 1, img: tikkaMasala, desc: '', price: 200 },
    { id: 1, img: butterChicken, desc: '', price: 200 },
    { id: 1, img: biryani, desc: '', price: 200 },
    { id: 1, img: Chaat, desc: '', price: 200 }
];

const Home = () => {
    const [image, setImage] = useState('')
    return (
        <section className=''>
            <div className='w-[90%] mx-auto py-5 flex justify-between '>
                <div className=''>
                    <h1 className='font-bold text-7xl lg:max-w-[600px] mb-6'>
                        Best delicious food at your doorstep
                    </h1>
                    <p className='font-medium text-xl lg:max-w-[500px] mb-6'>
                        Delicious meals just for you, order from many location
                        and have a hot meal waiting for you.
                    </p>
                    <div className='flex'>
                        <img
                            src={person1}
                            alt='person'
                            width={30}
                            height={30}
                            className='object-cover rounded-full'
                        />
                        <img
                            src={person2}
                            alt='person'
                            width={30}
                            height={30}
                            className='object-cover rounded-full relative right-2'
                        />
                        <img
                            src={person3}
                            alt='person'
                            width={30}
                            height={30}
                            className='object-cover rounded-full relative right-4'
                        />
                        <img
                            src={person3}
                            alt='person'
                            width={30}
                            height={30}
                            className='object-cover rounded-full relative right-6'
                        />
                    </div>
                    <div className=''>
                        <p>200+ happy customers</p>
                        <RatingStars rating={5} />
                    </div>
                    <div className='flex flex-wrap items-center gap-8 mt-6 '>
                        {ImageArray.map((item) => (
                            <figure key={item.id}>
                                <img
                                    onClick={() => setImage(item.img)}
                                    src={item.img}
                                    alt={item.img}
                                    width={100}
                                    height={100}
                                    className='object-cover rounded-lg aspect-square'
                                />
                                <figcaption className="text-center">{item.price}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
                <div className='bg-hero '>
                    <div className='flex flex-col gap-x-10'>
                        <img
                            src={image ? image : 'https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg'}
                            alt={image}
                            width={600}
                            height={600}
                            className='object-cover mx-auto rounded-lg aspect-square'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
