import React from 'react';

import { useForm } from 'react-hook-form';
Register.propTypes = {};

function Register(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }, //chua thong tin lien quan den loi
  } = useForm();

  const onSubmit = (data) => alert('Register Successful!');
  return (
    // handleSubmit xac dinh input nhap vao sau do goi onSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        {...register('name', {
          required: true,
          pattern: /^[a-zA-Z0-9]{3,}$/,
        })}
      />
      <label htmlFor="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 30,
        })}
        // defaultValue="hello"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        defaultValue="abc@gmail.com"
      />

      {Object.keys(errors).length !== 0 && (
        <ul className="error-container">
          {errors.name?.type === 'required' && <li>Name is required</li>}
          {errors.name?.type === 'pattern' && <li>Invalid Name must be 3 characters long </li>}
          {errors.password?.type === 'required' && <li>Password is required</li>}
          {errors.password?.type === 'minLength' && <li>Password must be 6 characters long</li>}
          {errors.email?.type === 'required' && <li>Email is required</li>}
          {errors.email?.type === 'pattern' && <li>Invalid Email Address</li>}
        </ul>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
