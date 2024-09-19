import { useParams } from 'react-router-dom';
import useFetchGet from '../hooks/useFetchGet';

const GetMenuItems = () => {
    const { id } = useParams();
    const fetchurl = `http://localhost:8000/restaurants/get-menu-items/${id}`;
    const { data } = useFetchGet({ id, url: fetchurl });
    console.log(data, "menu", data?.name);
    
  return (
      <section className='mt-8'>
        <h1 className='text-orange-500 font-extrabold text-center mb-8 text-7xl'>OUR MENU</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-6 xl:gap-8'>
              {data?.menu.map((item) => (
                  <div
                      key={item._id}
                      className='border-white border bg-black text-white p-4 rounded-xl'>
                      <div className='flex justify-between items-center mb-4'>
                          <h3 className='font-semibold '>
                              {item.name}
                          </h3>
                          <p className='text-green-500'>Rs{item.price}</p>
                      </div>
                      <img
                          src={`http://localhost:8000${item.dish.replace(
                              '/uploads/menu',
                              ''
                          )}`}
                          className='object-cover h-52 rounded-xl'
                          alt={item.name}
                          height={300}
                          width={300}
                          loading='lazy'
                          decoding='async'
                      />

                      <p className='mt-4'>{item.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
}

export default GetMenuItems
