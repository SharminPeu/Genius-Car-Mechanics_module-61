import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
    console.log(data);
    axios.post('https://protected-brushlands-31405.herokuapp.com/services',data)
    .then(res=>{
        // console.log(res);
        if(res.data.insertedId)
        {
            alert('Added Successfully');
            reset();
        }
    })
  } 
    return (
        <div className="add-service">
           <h2>Please add a service</h2> 
           <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="Description" />
      <input type="number" {...register("price")} placeholder="Price" />
      <input {...register("img")} placeholder="Image url" />

      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;