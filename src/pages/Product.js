import React from "react"
import { ProductCard, Sidebar } from "../components/index"
import ProductData from "../Data/ProductData"
import "./product.css"
import './common.css'

const Product = () => {
    return (
        <main className="grid-container">
            <Sidebar />
            <section className="content d-flex">
                {
                    ProductData.map(({ id, image, name }) => (
                        <ProductCard key={id} image={image} name={name} />
                    ))
                }
            </section>
        </main>
    )
}

export default Product