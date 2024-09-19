import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type restaurant = {
 _id: string,
 name: string,
 cuisine: string,
 location: string,
 coverImage: string,
}

interface All{
    items: restaurant[]
}

export const Restuarants = () => {
    const [data, setData] = useState<All>({ items: [] });

    useEffect(()=> {
        const getAll = async () => {
            await fetch('http://localhost:8000/restaurants/all-restuarants', {
                credentials: 'include'
            })
                .then((res) => res.json())
                .then((res) => setData({items : res}))
                .catch((err) => console.log(err));
        }
        getAll()
    }, [])
    console.log('all rest', data);
    
  return (
      <>
          <div className='bg-orange-500 p-5 flex justify-between items-center rounded-lg mt-4'>
              <div className=''>
                  <h2 className='text-white text-balance text-5xl font-bold max-w-[500px]'>
                      Grow your restuarant bussiness with our food delivery
                      service
                  </h2>
                  <button className='px-8 py-3 bg-black rounded-lg text-white mt-4 font-semibold'>
                      <Link to={'/register-restaurant'} className=''>
                          register
                      </Link>
                  </button>
              </div>
              <div className=''>
                  <img
                      src='https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg'
                      alt=''
                      height={450}
                      width={450}
                      className='rounded-lg'
                  />
              </div>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-6 xl:gap-8'>
              {data.items?.length > 0 &&
                  data.items?.map((item) => (
                      <Link to={`/restuarants/${item._id}`}
                          key={item._id}
                          className='bg-green-500 text-white rounded-lg p-4 flex flex-col gap-1  text-pretty'>
                          <div className=''>
                              <img
                                  src={`http://localhost:8000${item.coverImage.replace(
                                      '/uploads',
                                      ''
                                  )}`}
                                  alt=''
                                  height={250}
                                  width={250}
                                  className='rounded-lg w-full'
                              />
                          </div>
                          <h3 className='text-xl font-bold'>{item.name}</h3>
                          <p className='font-semibold'>{item.cuisine}</p>
                          <p className='font-semibold'>{item.location}</p>
                      </Link>
                  ))}
          </div>
      </>
  );
}
