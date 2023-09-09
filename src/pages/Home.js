import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, Route,Routes, useNavigate, useParams } from "react-router-dom";
import Product from "./About";



export default function Home (){
  const [listData ,setListData] =useState([])
  let getData=()=>{
    axios 
    .get("https://fakestoreapi.com/products")
    .then((res)=>{
      // console.log(res.data);
      setListData([...res.data]);
    })
    .catch((err)=>{
      console.log (err);
    })
  }
  getData()
 
const Param=useParams()
  const navigate =useNavigate()
  let clickCard =(id)=>{
    navigate(`/about/${Param.id}`);
    // console.log(id);
  }

  


    return (
        <>
        <header>
          <h1>LOOK SMART
          </h1>
        
        </header>
        <div className="">
          {/* <Button variant="contained" type="number" >Get Our Products</Button> */}
          {listData.map((x,i)=>(
                <div className="main-container" key={i}>

          <div className="container"> 
                  <img src={x.image} height={220}width={200}/><br/>
                  <p> <h2>Product </h2>{x.title}</p>
                  <Button variant="contained" onClick={ ()=>clickCard(x.id)}  
                key={i} type="">Buy
                </Button>
                  
                  </div> 
                  </div> 
                

           
          ))}
    
        </div>
        <Routes>
          <Route path="about/:id" element={<Product/>} />
        </Routes>
        </>
    )

}