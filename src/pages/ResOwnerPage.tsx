import { useParams } from 'react-router-dom';
import useFetchGet from '../hooks/useFetchGet';
import PostMenuItems from '../components/PostMenuItems';
import GetMenuItems from '../components/GetMenuItems';
import useUserInfo from '../hooks/useUserInfo';



export type FormDataMenuItems = {
    [key: string]: string | File | null; // Index signature
    name: string;
    dish: null | File | string;
    price: string;
    description: string;
};

const ResOwnerPage = () => {
    const { id } = useParams();
    const fetchurl = `http://localhost:8000/restaurants/${id}`;
    const { data } = useFetchGet({ id, url: fetchurl });
    const { userData } = useUserInfo();
    console.log(data, 'restaurants', data?.name);
    if (!data) {
        return <div>Loading...</div>; // Or some loading indicator
    }

    return (
        <div className=''>
            <h2>{data.name}</h2>
            <p>Cuisine: {data.cuisine}</p>
            <p>Location: {data.location}</p>
            {/* Render other properties as needed */}
            <img className='rounded-xl w-full object-cover h-[80vh]'
                src={`http://localhost:8000${data.coverImage.replace(
                    '/uploads',
                    ''
                )}`}
                alt={data.name}
            />
            {/* Assuming createdBy is an object with properties like name */}
            <p>
                Created By: restuarant id: {id} | user fullname:{' '}
                {data.createdBy?.fullname} | user id: {data.createdBy?._id}
            </p>

            {userData?.role === 'OWNER' && data.createdBy?._id === userData._id && (
                <PostMenuItems />
            )}
            <GetMenuItems />
        </div>
    );
};

export default ResOwnerPage;
