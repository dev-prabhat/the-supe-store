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
    name: "IronMan T-shirt",
    originalPrice:799,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice:399,
    delivery:40,
    discount:50,
    star: 2.3,
    tag: "New"
  },
  {
    _id: uuid(),
    image: getImg(2),
    name: "Marvel T-shirt",
    originalPrice: 799,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice:560,
    delivery:40,
    discount:30,
    star: 2.2,
  },
  {
    _id: uuid(),
    image: getImg(3),
    name: "Arc T-shirt",
    originalPrice: 699,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 525,
    delivery:40,
    discount:25,
    star: 3.6,
    tag: "Trending"
  },
  {
    _id: uuid(),
    image: getImg(4),
    name: "Marvel T-shirt",
    originalPrice: 749,
    categoryName: "T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 485,
    delivery:40,
    discount:35,
    star: 4.5
  },
  {
    _id: uuid(),
    image: getImg(5),
    name: "Spidey Hoodie",
    originalPrice: 1499,
    categoryName: "Hoodie",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1200,
    delivery:40,
    discount:20,
    star: 3.8,
    tag: "BestSeller"
  },
  {
    _id: uuid(),
    image: getImg(6),
    name: "Avenger Hoodie ",
    originalPrice: 1699,
    categoryName: "Hoodie",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1275,
    delivery:40,
    discount:25,
    star: 3.6
  },
  {
    _id: uuid(),
    image: getImg(7),
    name: "Marvel Hoodie",
    originalPrice: 1799,
    categoryName: "Hoodie",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1530,
    delivery:40,
    discount:15,
    star: 3.7,
    tag: "New Offer"
  },
  {
    _id: uuid(),
    image: getImg(8),
    name: "Caption America Jacket",
    originalPrice: 2299,
    categoryName: "Jacket",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1840,
    delivery:40,
    discount:20,
    star: 2.1
  },
  {
    _id: uuid(),
    image: getImg(9),
    name: "Avenger's Jacket ",
    originalPrice: 1999,
    categoryName: "Jacket",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 1800,
    delivery:40,
    discount:20,
    star: 3.5,
    tag: "BestSeller"
  },
  {
    _id: uuid(),
    image: getImg(10),
    name: "Spidey T-shirt",
    originalPrice: 799,
    categoryName: "Woman T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 625,
    delivery:40,
    discount:22,
    star: 4.2,
  },
  {
    _id: uuid(),
    image: getImg(11),
    name: "Captain Marvel's T-shirt",
    originalPrice: 699,
    categoryName: "Woman T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 595,
    delivery:40,
    discount:15,
    star: 2.5,
    tag: "Limited"
  },
  {
    _id: uuid(),
    image: getImg(12),
    name: "Captain Marvel's T-shirt",
    originalPrice: 699,
    categoryName: "Woman T-shirt",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    discountedPrice: 560,
    delivery:40,
    discount:20,
    star: 2.5,
    tag: "Limited"
  },
];
