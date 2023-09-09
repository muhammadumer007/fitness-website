import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom"

export default function Product (){
    
    let Params= useParams();
    const [Model ,setModel] =useState ({})
    let getPrduct=()=>{
        axios
        .get(`https://fakestoreapi.com/products/${Params.id}`)
        .then((res)=>{
            console.log(res.data);
            setModel ({...res.data});
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    getPrduct()


return(
    <>
        <div className="about-container"> 
            {/* <Button variant="contained" onClick={getPrduct}>get products</Button> */}
                  <img src={Model.image} height={220}width={200}/><br/>
            <p> {Model.title}</p>
            <br />
            <h2>price:</h2> <p>{Model.price}</p>
            <br/>
            <h2>About product</h2> <p>{Model.description}</p>
                  </div>
    </>
)

}