import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

const getImg = (imageNumber) => process.env.PUBLIC_URL + `/images/img${imageNumber}.jpg`

export const categories = [
  {
    _id: uuid(),
    categoryName: "T-shirt",
    image: getImg(1),
    alt:"t_shirt",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Hoodie",
    image: getImg(5),
    alt:"hoodie",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Jacket",
    image: getImg(8),
    alt:"jacket",
    description:
      "",
  },
  {
    _id: uuid(),
    categoryName: "Woman T-shirt",
    image: getImg(11),
    alt:"woman_t_shirt",
    description:
      "",
  },
];
