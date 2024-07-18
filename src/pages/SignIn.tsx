import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch('http://localhost:8000/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    navigate('/');
                } else {
                    alert('Sign-in failed. Please try again.');
                }
            })
            .catch((err) => console.log(err));
            console.log('submitted');

    };
  return (
      <div className='h-screen flex flex-col items-center justify-center'>
          <h1 className='text-black text-3xl font-extrabold mb-4'>Signin</h1>
          <form
              onSubmit={handleSubmit}
              className='w-2/5 px-5 py-10 flex flex-col items-center justify-center gap-10 rounded-lg bg-black font-medium'>
              <label htmlFor='email' className='w-full'>
                  <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='email'
                      required
                      onChange={handleChange}
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
                      onChange={handleChange}
                      className='rounded-md focus-visible:outline-none p-2 w-full'
                  />
              </label>

              <div className='text-white'>
                  Don't have an account?{' '}
                  <Link className='text-blue-400 underline' to={'/user/signup'}>
                      Signup
                  </Link>
              </div>

              <button
                  disabled={
                      formData.email.length < 3 || formData.password.length < 3
                  }
                  type='submit'
                  className='disabled:bg-green-300 py-2 px-8 rounded-lg bg-green-500'>
                  Signin
              </button>
          </form>
      </div>
  );
}
