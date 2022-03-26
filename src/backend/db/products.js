import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


const getImg = (imageNumber) => process.env.PUBLIC_URL + `/images/img${imageNumber}.jpg`


export const products = [
  {
    _id: uuid(),
    image: getImg(1),
    name: "IronMan Tshirt",
    price: 399,
    categoryName: "T-shirt",
    star: 2.3,
    tag: "New"
  },
  {
    _id: uuid(),
    image: getImg(2),
    name: "Marvel Tshirt",
    price: 499,
    categoryName: "T-shirt",
    star: 2.2,
  },
  {
    _id: uuid(),
    image: getImg(3),
    name: "Arc Tshirt",
    price: 649,
    categoryName: "T-shirt",
    star: 3.6,
    tag: "Trending"
  },
  {
    _id: uuid(),
    image: getImg(4),
    name: "Spidy Hoodie",
    price: 1249,
    categoryName: "Hoodie",
    star: 4.5
  },
  {
    _id: uuid(),
    image: getImg(5),
    name: "Avenger Hoodie",
    price: 1499,
    categoryName: "Hoodie",
    star: 3.8,
    tag: "BestSeller"
  },
  {
    _id: uuid(),
    image: getImg(6),
    name: "Marvel Hoodie",
    price: 1799,
    categoryName: "Hoodie",
    star: 3.6
  },
  {
    _id: uuid(),
    image: getImg(7),
    name: "Caption America Jacket",
    price: 1999,
    categoryName: "Jacket",
    star: 3.7,
    tag: "New Offer"
  },
  {
    _id: uuid(),
    image: getImg(8),
    name: "Avenger's Jacket",
    price: 2299,
    categoryName: "Jacket",
    star: 2.1
  },
  {
    _id: uuid(),
    image: getImg(9),
    name: "Marvel tshirt",
    price: 599,
    categoryName: "Woman T-shirt",
    star: 3.5,
    tag: "BestSeller"
  },
  {
    _id: uuid(),
    image: getImg(10),
    name: "Spidy Tshirt",
    price: 799,
    categoryName: "Woman T-shirt",
    star: 4.2,
  },
  {
    _id: uuid(),
    image: getImg(11),
    name: "Captain Marvel's Tshirt",
    price: 699,
    categoryName: "Woman T-shirt",
    star: 2.5,
    tag: "Limited"
  },
  {
    _id: uuid(),
    image: getImg(12),
    name: "Captain Marvel's Tshirt",
    price: 699,
    categoryName: "Woman T-shirt",
    star: 2.5,
    tag: "Limited"
  },
];