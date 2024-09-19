import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormDataState = {
    name: string;
    cuisine: string;
    location: string;
    coverImage: File | null;
} & { [key: string]: string | File | null };

const CreateRestaurant = () => {
    const [formData, setFormData] = useState<FormDataState>({
        name: '',
        cuisine: '',
        location: '',
        coverImage: null
    });

    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value, type, files } = e.target;
         if (type === 'file') {
             // Assert that files is not null
             const selectedFile = files!;
             setFormData((prev) => ({ ...prev, coverImage: selectedFile[0] }));
         } else {
             setFormData((prev) => ({ ...prev, [name]: value }));
         }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            const value = formData[key];
            if (value !== null && typeof value !== 'undefined') {
                data.append(key, value);
            }
        });

        try {
            await fetch(
                'http://localhost:8000/restaurants/register-restuarant',
                {
                    method: 'POST',
                    body: data, // No need to set Content-Type header
                    credentials: 'include'
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    navigate('/');
                });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='text-black text-3xl font-extrabold mb-4'>
                Register Your Restuarant
            </h1>
            <form
                onSubmit={handleSubmit}
                className='w-2/5 px-5 py-10 flex flex-col items-center justify-center gap-10 rounded-lg bg-black font-medium'>
                <label htmlFor='name' className='w-full'>
                    <input
                        name='name'
                        type='text'
                        id='name'
                        required
                        onChange={handleChange}
                        placeholder='Restaurant Name'
                        className='w-full rounded-md focus-visible:outline-none p-2'
                    />
                </label>
                <label htmlFor='cuisine' className='w-full'>
                    <input
                        name='cuisine'
                        type='text'
                        id='cuisine'
                        required
                        onChange={handleChange}
                        placeholder='Cuisine like indian, chinese...'
                        className='w-full rounded-md focus-visible:outline-none p-2'
                    />
                </label>
                <label htmlFor='location' className='w-full'>
                    <input
                        name='location'
                        type='text'
                        id='location'
                        required
                        onChange={handleChange}
                        placeholder='Location'
                        className='w-full rounded-md focus-visible:outline-none p-2'
                    />
                </label>
                <label htmlFor='coverImage' className='w-full'>
                    <input
                        name='coverImage'
                        type='file'
                        id='coverImage'
                        required
                        onChange={handleChange}
                        placeholder='Your restaurant Profile'
                        className='w-full rounded-lg focus-visible:outline-none p-2'
                    />
                </label>

                <button
                    className='disabled:bg-green-300 py-2 px-8 rounded-lg bg-green-500 text-white'
                    type='submit'>
                    Register
                </button>
            </form>
        </div>
    );
};

export default CreateRestaurant;
