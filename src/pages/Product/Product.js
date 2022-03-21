import React from "react"
import { ProductCard, Sidebar } from "../../components/index"
import ProductData from "../../Data/ProductData"
import "./product.css"
import '../common.css'



const Product = () => {
    return (
        <main className="productpage-grid-container">
            <Sidebar />
            <section className="content d-flex">
                {
                    ProductData.map((Obj) => (
                        <ProductCard key={Obj._id} productObj={Obj} />
                    ))
                }
            </section>
        </main>
    )
}

export default Product