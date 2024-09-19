import { useState } from 'react'
import useFetchPost from '../hooks/useFetchPost';
import { FormDataMenuItems } from '../pages/ResOwnerPage';
import { useParams } from 'react-router-dom';

const PostMenuItems = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState<FormDataMenuItems>({
        name: '',
        dish: null,
        price: '',
        description: ''
    });
    const { id } = useParams();
    const url = `http://localhost:8000/restaurants/add-menu-item/${id}`;
        const { handleChange, handleSubmit } = useFetchPost({
            setFormData,
            id,
            formData,
            setShow,
            url
        });
  return (
      <>
          <button onClick={() => setShow(!show)}>
              Add your Delicious, Yummy menu
          </button>
          {show && (
              <>
                  <form
                      onSubmit={handleSubmit}
                      className='w-2/5 px-5 py-10 flex flex-col items-center justify-center gap-10 rounded-lg bg-black font-medium'>
                      <input
                          type='text'
                          name='name'
                          required
                          placeholder='name'
                          onChange={handleChange}
                          className='w-full rounded-md focus-visible:outline-none p-2'
                      />
                      <input
                          type='file'
                          name='dish'
                          required
                          id='dish'
                          placeholder='dish'
                          onChange={handleChange}
                          className='w-full rounded-md focus-visible:outline-none p-2'
                      />
                      <input
                          type='text'
                          name='price'
                          required
                          placeholder='price'
                          onChange={handleChange}
                          className='w-full rounded-md focus-visible:outline-none p-2'
                      />
                      <input
                          type='text'
                          name='description'
                          required
                          placeholder='description about dish'
                          onChange={handleChange}
                          className='w-full rounded-md focus-visible:outline-none p-2'
                      />
                      <button
                          className='disabled:bg-green-300 py-2 px-8 rounded-lg bg-green-500 text-white'
                          type='submit'>
                          Submit
                      </button>
                  </form>
              </>
          )}
      </>
  );
}

export default PostMenuItems
