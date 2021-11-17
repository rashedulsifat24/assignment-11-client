import React from 'react';
import { useForm } from "react-hook-form";
import './AddItems.css'
const AddItems = () => {
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
          fetch("https://stormy-garden-22183.herokuapp.com/addaItem", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
  };
        return (
                <div className="add-item-style">
                       <h2>Add a Item</h2>
                      <div className="from-style p-lg-4">
                      <form onSubmit={handleSubmit(onSubmit)}>
                      <input placeholder="name" {...register("name", { required: true })} /><br/>
                        <input placeholder="price" {...register("price", { required: true })} /><br/>
                        <input placeholder="des" {...register("des", { required: true })} /><br/>
                        <input placeholder="status" {...register("status", { required: true })} /><br/>
                        <input placeholder="img-url" {...register("img", { required: true })} /><br/>
                         {errors.exampleRequired && <span>This field is required</span>}
      
                        <input type="submit" />
                       </form>
                      </div>
                </div>
        );
};

export default AddItems;