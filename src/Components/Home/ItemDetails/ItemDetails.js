import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "./../../Hooks/useAuth";

const ItemDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://stormy-garden-22183.herokuapp.com/items/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  const onSubmit = (data) => {
    data.email = user.email;
    data.name = user.displayName;
    data.status = item.status;
    data.price = item.price;

    fetch(`https://stormy-garden-22183.herokuapp.com/addorder/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("added your order");
          reset();
        } else {
          alert("already you added");
        }
      });
    // console.log(data)
  };
  return (
    <div>
      <h2 className="my-4">Purchase product: {item.name}</h2>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
          <img src={item.img} />
          <p>{}</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mt-2">
          <form className="shipping-form fs" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} />
            <br />

            <input defaultValue={user.email} {...register("email")} />
            <br />

            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <br />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <br />
            <input
              placeholder="phone number"
              defaultValue=""
              {...register("phone")}
            />
            <br />
            <button type="submit">Confirm Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
