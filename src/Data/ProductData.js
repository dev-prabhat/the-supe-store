import { v4 as uuid } from "uuid"
import { man_tshirt_1, man_tshirt_3, man_tshirt_5, hoodie_1, hoodie_2, hoodie_3, man_jacket_1, man_jacket_2, woman_tshirt_1, woman_tshirt_2, woman_tshirt_3 } from "../assests/index"

const ProductData = [
    {
        _id: uuid(),
        image: man_tshirt_1,
        name: "IronMan Tshirt",
        price: 399,
        categoryName: "T-shirt",
        star: 2.3,
        tag: "New"
    },
    {
        _id: uuid(),
        image: man_tshirt_3,
        name: "Marvel Tshirt",
        price: 499,
        categoryName: "T-shirt",
        star: 2.2,
    },
    {
        _id: uuid(),
        image: man_tshirt_5,
        name: "Arc Tshirt",
        price: 649,
        categoryName: "T-shirt",
        star: 3.6,
        tag: "Trending"
    },
    {
        _id: uuid(),
        image: hoodie_1,
        name: "Spidy Hoodie",
        price: 1249,
        categoryName: "Hoodie",
        star: 4.5
    },
    {
        _id: uuid(),
        image: hoodie_2,
        name: "Avenger Hoodie",
        price: 1499,
        categoryName: "Hoodie",
        star: 3.8,
        tag: "BestSeller"
    },
    {
        _id: uuid(),
        image: hoodie_3,
        name: "Marvel Hoodie",
        price: 1799,
        categoryName: "Hoodie",
        star: 3.6
    },
    {
        _id: uuid(),
        image: man_jacket_1,
        name: "Caption America Jacket",
        price: 1999,
        categoryName: "Jacket",
        star: 3.7,
        tag: "New Offer"
    },
    {
        _id: uuid(),
        image: man_jacket_2,
        name: "Avenger's Jacket",
        price: 2299,
        categoryName: "Jacket",
        star: 2.1
    },
    {
        _id: uuid(),
        image: woman_tshirt_1,
        name: "Marvel tshirt",
        price: 599,
        categoryName: "Woman T-shirt",
        star: 3.5,
        tag: "BestSeller"
    },
    {
        _id: uuid(),
        image: woman_tshirt_2,
        name: "Spidy Tshirt",
        price: 799,
        categoryName: "Woman T-shirt",
        star: 4.2,
    },
    {
        _id: uuid(),
        image: woman_tshirt_3,
        name: "Captain Marvel's Tshirt",
        price: 699,
        categoryName: "Woman T-shirt",
        star: 2.5,
        tag: "Limited"
    },
]

export default ProductData