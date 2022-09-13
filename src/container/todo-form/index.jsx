import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../form-controls/input-field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


TodoForm.propTypes = {
    onSubmit : PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object({
        title: yup.string().required('Please enter a title'),
        
      }).required();

    const form = useForm( {
        defaultValues: {
        title :''
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = values => {
        console.log('Todo Form:', values);
        
    }
    return (
        <div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
             <InputField name="title" label ="Todo" form={form}/>
            </form>
        </div>
    );
}

export default TodoForm;