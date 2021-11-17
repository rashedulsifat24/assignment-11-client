import React from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Item from '../Item/Item';
import useFirebase from './../../Hooks/useFirebase';
import { useEffect } from 'react';
import './Items.css'
const Items = () => {
        
        const [items,setItems]=useState([]);
       
       useEffect(()=>{
        fetch("https://stormy-garden-22183.herokuapp.com/items")
          .then((res) => res.json())
          .then((result) => {
            setItems(result);
          });
       },[])
       
       
        return (
                <div className="px-lg-5 py-lg-2 items-contaner-style">

                  <div className="p-lg-5">
                  <h1>What's Trending</h1>
                  <p>People's most choised places</p>
                  </div>

                  <div className="p-lg-4">
                  <Row xs={1} md={3} className="g-4">
                        {
                                items.map(item=><Item key={item._id} item={item}>

                                </Item>)
                        }     
                  </Row>
                  </div>
                   
                </div>
        );
};

export default Items;