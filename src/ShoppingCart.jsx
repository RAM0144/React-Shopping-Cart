/* eslint-disable react/prop-types */

import { useState } from "react";
import "./shopping.css"

const Data = [
    {  

        subject  : "Start BootStrap",
        headline  : "Shop in style" ,
        description: "With this shop hompeage template",
        id     : "1",
        num    : "450 x 300",
        item   : "Fancy Product",
        amount : "$40.00-$80.00",
        CartAdd : false,
        isEnabled: false,
        isStar  : false,
    },
    
    {
        id     : "2",
        sale   : "sale",
        num    : "450 x 300",
        item   : "Special Item",
        amount : "$18.00",
        CartAdd : true,
        isEnabled: true,
        isStar  : true,
        offer :"$20.00",
        

    },  

    {
        id     : "3",
        sale   : "sale",
        num    : "450 x 300",
        item   : "Sale Item",
        amount : "$25.00",
        CartAdd : true,
        isEnabled: true,
        isStar  : false,
        offer  :"$50.00", 
    },

    {
        id     : "4",
        num    : "450 x 300",
        item   : "Popular Item",
        amount : "$40.00",
        CartAdd : true,
        isEnabled : false,
        isStar  : true,
    },

    {
        id     : "5",
        sale   : "sale",
        num    : "450 x 300",
        item   : "Sale Item",
        amount : "$25.00",
        CartAdd : true,
        isEnabled: true,
        isStar  : false,
        offer : "$50.00",
    },

    {
        id     : "6",
        num    : "450 x 300",
        item   : "Fancy Product",
        amount : "$120.00",  
        CartAdd : false,
        isEnabled: false,
        isStar  : false,
        offer: "$120.00",
    },

    {   
        id     : "7",
        sale   : "sale",
        num    : "450 x 300",
        item   : "Special Item",
        amount : "$18.00",
        CartAdd : true,
        isEnabled: true,
        isStar  : true,
        offer: "$20.00",
    },

    {
        id     : "8",
        num    : "450 x 300",
        item   : "Popular Item",
        amount : "$40.00",
        CartAdd : true,
        isEnabled: true,
        isStar  : true,
    },
];


const Title = ()=>{
    return(
        <>

         <a className="navbar-brand">Start BootStrap</a>
        <a className="navbar-brand">Home</a>
        <a className="navbar-brand">About</a>
        <a className="navbar-brand">Shop</a>  


    
    <div>
         
    

      {Data.map((val)=>{
        return(
           // eslint-disable-next-line react/jsx-key
           <div style={{
        
            border :"1px solid #212529",
            backgroundColor : "#212529",
            display:"flex",
            height :"50px",
           
            
        }}
        >
        <h1 className="shop" key={val.headline}>{val.headline}</h1>
        <p className="text" key={val.description}>{val.description}</p>
        </div>
            
           
        )
        
      })}
    <Purchase/>
    
    </div>
    
      
    </>
    
    )
}


const Shopping = ({id, sale, num, item, amount,AddToCart,ViewOption,CartAdd,isEnabled,isStar,isoffer,offer})=>{
    return(
      
        <div>

 <div 
  style={{
        border: "1px solid",
        textAlign: "center",
        position:"relative", left:400, bottom:100,
        padding: "10px",
        width:"253px",
        height:"325px",
        borderRadius:"12px"
        
        }}
        
>   
    

    <p style={{fontSize:"38px",backgroundColor:"#dee1e6",padding:"35px",color:"GrayText"}}>{num}</p>

   <h2 style={{fontSize:"25px"}}>{item}</h2>
   {isStar &&(
    <i className="fa-regular fa-star" style={{color:"gold"}}></i>
    
   )}
     
    <p>{amount}.{offer}</p>
  
   {isEnabled ?(
     <button onClick={AddToCart} style={{ padding:"10px", borderRadius:"8px", fontSize:"20px", }}>
     {CartAdd ? "Remove" : "Add to Cart"} 
     </button>
   ):(
    <button onClick={ViewOption} style={{ padding:"10px", borderRadius:"8px", fontSize:"20px",}}>
        View option </button> 
   )}

 </div>
   
</div>
         
 )
 
};


  const Purchase = ()=>{
     
    const[Cart, setCart] = useState([]);
    const addCart = (id)=>{
        setCart([...Cart, id]);

    };

    return(
        <div
         style={{
            position:"relative",
            paddingTop: "200px",
            
         }}
          
        >
            {console.log(Cart)}
            <p>
            <h1 style={{
            position:"absolute",top:15,right:15,margin:"5px",
            padding:"10px",fontSize:"20px",
            border:"1px solid", borderRadius:"8px" }} 
            className="fa-solid fa-cart-shopping">
                cart({Cart.length})</h1> 
           
              
            </p>
            
            {Data.map((buy)=>{
                return(
                    <Shopping
                     key={buy.id}
                      {...buy}
                      CartAdd={Cart.includes(buy.id)}
                      AddToCart ={()=> addCart(buy.id)}
                    />
                )
            })}
          
          <div >
        <footer style=
        {{background:"black",color:"white",height:"120px",display:"flex",justifyContent:"center", alignItems:"center"}}>
            <p>Copyright @ Your Website 2023</p>
        </footer>
      </div>
        </div>
    )

  

  };
  


 export default Title;