
export const SignIn = () => {

  return (
      <div className='h-screen flex flex-col items-center justify-center'>
          <h1 className='text-black text-3xl font-extrabold mb-4'>Signin</h1>
          <form
              action=''
              className='w-2/5 px-5 py-10 flex flex-col items-center justify-center gap-10 rounded-lg bg-black text-white font-medium'>
              <label htmlFor='email' className='w-full'>
                  <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='email'
                      required
                      onChange={() => ''}
                      className='rounded-md focus-visible:outline-none p-2 w-full'
                  />
              </label>
              <label htmlFor='password' className='w-full'>
                  <input
                      type='password'
                      id='password'
                      name='password'
                      placeholder='password'
                      required
                      onChange={() => ''}
                      className='rounded-md focus-visible:outline-none p-2 w-full'
                  />
              </label>

              <button
                  type='submit'
                  className='py-2 px-8 rounded-lg bg-green-500'>
                  Signin
              </button>
          </form>
      </div>
  );
}
