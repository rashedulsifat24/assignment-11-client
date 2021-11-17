import React,{useState} from 'react';
import useAuth from './../Hooks/useAuth';
import './MyOrder.css'
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

const MyOrder = () => {
  const {user}=useAuth();
  const email=user?.email;
  const [myorder,setMyOrder]=useState([]);
  const [isDelete,setIsDelete]=useState(null);

  //my order
  useEffect(() => {
    fetch(`https://stormy-garden-22183.herokuapp.com/myorder/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        console.log(data);
      });
  }, [{ isDelete }]);

  //handel delete my order
  const handelDeleteMyOrder = (id) => {
    fetch(`https://stormy-garden-22183.herokuapp.com/deleteMyOrder/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("your order deleted successfully");
          setIsDelete(true);
        }
      });
  };

  // handel my order status
  const handelMyOrderStatus = (id) => {
    fetch(`https://stormy-garden-22183.herokuapp.com/updetMyOrderStatus/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("your order now active");
        }
      });
  };

  return (
    <div>
      <h2 className="p-lg-4">My order list</h2>
      <table className="table table-bordered table-style">
        <thead>
          <tr>
            <th scope="col">Order name</th>
            <th scope="col">Current status</th>
            <th scope="col">Delete</th>
            <th scope="col">Updates order</th>
          </tr>
        </thead>
        {myorder.map((order) => (
          <tbody key={order._id}>
            <tr>
              <th scope="row"> {order.name}</th>

              <td>{order.status}...</td>
              <td>
                <Button onClick={() => handelDeleteMyOrder(order._id)}>
                  Delete
                </Button>
              </td>
              <td>
                <Button onClick={() => handelMyOrderStatus(order._id)}>
                  Updates status
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyOrder;