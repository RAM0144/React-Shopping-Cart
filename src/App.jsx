import { useState } from 'react'
import PropTypes from "prop-types";
import "./App.css"
import Navbar from "./Navbar";
import Footer from './Footer';


const Data = [
  {
    subject: "Start BootStrap",
    headline: "Shop in style",
    description: "Best Sports Running & Casual Shoe in our shop",
    id: "1",
    num: "450 x 300",
    item: "Fancy Product",
    amount: "$40.00-$80.00",
    CartAdd: false,
    isEnabled: false,
    isStar: false,
    img: "https://www.crocs.in/media/catalog/product/2/0/206715_4ta_alt100_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
  },

  {
    id: "2",
    sale: "sale",
    num: "450 x 300",
    item: "Special Item",
    amount: "$18.00",
    CartAdd: true,
    isEnabled: true,
    isStar: true,
    offer: "$20.00",
    img: "https://www.crocs.in/media/catalog/product/2/0/206715_0dt_alt100_1.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"

  },

  {
    id: "3",
    sale: "sale",
    num: "450 x 300",
    item: "Sale Item",
    amount: "$25.00",
    CartAdd: true,
    isEnabled: true,
    isStar: false,
    offer: "$50.00",
    img: "https://www.crocs.in/media/catalog/product/2/0/206715_260_alt100.jpg?auto=webp&format=pjpg&width=1280&height=1600&fit=cover"
  },

  {
    id: "4",
    num: "450 x 300",
    item: "Popular Item",
    amount: "$40.00",
    CartAdd: true,
    isEnabled: false,
    isStar: true,
    img: "https://th.bing.com/th/id/OIP.1JNKZCzkbRdxmg_mSHhNuAHaEL?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },

  {
    id: "5",
    sale: "sale",
    num: "450 x 300",
    item: "Sale Item",
    amount: "$25.00",
    CartAdd: true,
    isEnabled: true,
    isStar: false,
    offer: "$50.00",
    img: "https://th.bing.com/th/id/OIP.G12I0hXO4YbW69aYjifRCQHaEp?w=296&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },

  {
    id: "6",
    num: "450 x 300",
    item: "Fancy Product",
    amount: "$120.00",
    CartAdd: false,
    isEnabled: false,
    isStar: false,
    offer: "$120.00",
    img: "https://th.bing.com/th/id/R.be12901478801c51c5052a0742e580a0?rik=kMrctDE9fg8WqQ&riu=http%3a%2f%2fimage.sportsmansguide.com%2fadimgs%2fl%2f2%2f202909_ts.jpg&ehk=jQoIpPntndIlqUJwkZUCTvpBNbobTylLl%2bMU8Q2IEXQ%3d&risl=&pid=ImgRaw&r=0"
  },

  {
    id: "7",
    sale: "sale",
    num: "450 x 300",
    item: "Special Item",
    amount: "$18.00",
    CartAdd: true,
    isEnabled: true,
    isStar: true,
    offer: "$20.00",
    img: "https://th.bing.com/th/id/OIP.odXPP_yN5H89sun-7Lxr2gHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7//"
  },

  {
    id: "8",
    num: "450 x 300",
    item: "Popular Item",
    amount: "$40.00",
    CartAdd: true,
    isEnabled: true,
    isStar: true,
    img: "https://th.bing.com/th/id/OIP.TaNVdPuQzgrpSS-hh9v8WAHaGD?w=242&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
];


const App = () => {
  return (

    <>

      <Navbar />

      <div>

        {Data.map((val) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div style={{


              backgroundColor: "grey",
              display: "flex",
              height: "50px",


            }}
            >
              <h1 className="shop" key={val.headline}>{val.headline}</h1>
              <p className="text" key={val.description}>{val.description}</p>
            </div>


          )

        })}
        <Purchase />

      </div>


    </>

  )
}


const Shopping = ({ img, sale, item, amount, AddToCart, ViewOption, CartAdd, isEnabled, isStar, offer, }) => {
  return (

    <div>

      <div
        style={{
          border: "5px solid grey",
          textAlign: "center",
          position: "relative", left: 400, bottom: 165,
          padding: "10px",
          width: "255px",
          height: "325px",
          borderRadius: "12px"

        }}
      >
        <p style={{ position: "absolute", top: 15, right: 15, fontFamily: "fantasy" }}>{sale}</p>

        <img src={img} alt={img} style={{ width: "70%" }}></img>

        <h2 style={{ fontSize: "25px" }}>{item}</h2>
        {isStar && (
          <i className="fa-regular fa-star" style={{ color: "gold" }}></i>

        )}

        <p>{amount}.{offer}</p>


        {isEnabled ? (
          <button onClick={AddToCart} style={{ padding: "10px", borderRadius: "8px", fontSize: "20px", }}>
            {CartAdd ? "Remove" : "Add to Cart"}
          </button>
        ) : (
          <button onClick={ViewOption} style={{ padding: "10px", borderRadius: "8px", fontSize: "20px", }}>
            View option </button>
        )}

      </div>

    </div>

  )

};
const Purchase = () => {

  const [Cart, setCart] = useState([]);

  const addCart = (id) => {
    setCart([...Cart, id]);

  };

  return (
    <div
      style={{
        position: "relative",
        paddingTop: "200px",

      }}

    >
      {console.log(Cart)}
      <p>
        <h1 style={{
          position: "fixed", top: 10, right: 15,
          padding: "10px", fontSize: "20px",
          border: "3px solid", borderRadius: "8px",
        }}
          className="fa-solid fa-cart-shopping">
          cart({Cart.length})</h1>


      </p>

      {Data.map((buy) => {
        return (
          <Shopping
            key={buy.id}
            {...buy}
            CartAdd={Cart.includes(buy.id)}
            AddToCart={() => addCart(buy.id)}
          />
        )
      })}

      <Footer />
    </div>

  )

};

Shopping.propTypes = {
  sale: PropTypes.string,
  img: PropTypes.string,
  item: PropTypes.string,
  amount: PropTypes.string,
  AddToCart: PropTypes.string,
  ViewOption: PropTypes.string,
  CartAdd: PropTypes.string,
  isEnabled: PropTypes.string,
  isStar: PropTypes.string,
  offer: PropTypes.string,
}



export default App;
