import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

Book.propTypes = {
  books: PropTypes.func,
};

function Book(props) {
  const { register, handleSubmit } = useForm({
    name: 'book',
    author: 'John',
    amount: '1',
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>React Hook Form</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Your Name" {...register('name')} />
        <label htmlFor="name">Author</label>
        <input type="text" name="author" id="author" placeholder="author" {...register('author')} />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" placeholder=" amount" {...register('amount')} />

        <ul className="error-container">{/* <li>Name is required</li> */}</ul>

        <button type="submit">Submit</button>
      </form>
      <div></div>
    </>
  );
}

export default Book;
