import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { Spinner } from "react-bootstrap";
const Item = ({ item }) => {
  const { name, img, price, des, _id } = item;
  const { user, isLoding } = useAuth();
  const email = user?.email;
  item.email = email;
  if (isLoding) {
    return <Spinner animation="border" variant="success" />;
  }
  //handel order
  const handelOrder = (id) => {
    fetch(`https://stormy-garden-22183.herokuapp.com/addorder/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("added your order");
        } else {
          alert("already you added");
        }
      });
  };

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h3>{price}</h3>
            <p>{des}</p>
          </Card.Body>
        </Card>
        <Card.Footer>
          <Link to={`/item/${_id}`}>
            <Button>Book Now</Button>
          </Link>
        </Card.Footer>
      </Col>
    </div>
  );
};

export default Item;