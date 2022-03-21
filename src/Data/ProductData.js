import { v4 as uuid } from "uuid"
import { man_tshirt_1, man_tshirt_3, man_tshirt_5, hoodie_1, hoodie_2, hoodie_3, man_jacket_1, man_jacket_2, woman_tshirt_1, woman_tshirt_2, woman_tshirt_3 } from "../assests/index"

const ProductData = [
    {
        _id: uuid(),
        image: man_tshirt_1,
        name: "Man Tshirt",
        price: 499
    },
    {
        _id: uuid(),
        image: man_tshirt_3,
        name: "Man Tshirt",
        price: 399
    },
    {
        _id: uuid(),
        image: man_tshirt_5,
        name: "Man Tshirt",
        price: 349
    },
    {
        _id: uuid(),
        image: hoodie_1,
        name: "Hoodie",
        price: 1349
    },
    {
        _id: uuid(),
        image: hoodie_2,
        name: "Hoodie",
        price: 1499
    },
    {
        _id: uuid(),
        image: hoodie_3,
        name: "Hoodie",
        price: 1799
    },
    {
        _id: uuid(),
        image: man_jacket_1,
        name: "Man jacket",
        price: 1999
    },
    {
        _id: uuid(),
        image: man_jacket_2,
        name: "Man jacket",
        price: 2499
    },
    {
        _id: uuid(),
        image: woman_tshirt_1,
        name: "Woman tshirt",
        price: 599
    },
    {
        _id: uuid(),
        image: woman_tshirt_2,
        name: "Woman tshirt",
        price: 399
    },
    {
        _id: uuid(),
        image: woman_tshirt_3,
        name: "Woman tshirt",
        price: 499
    },
]

export default ProductData