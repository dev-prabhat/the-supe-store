import React from "react"
import { ProductCard, Sidebar } from "../../components/index"
import { useFilter } from '../../Context/Filter-Context'
import "./product.css"
import '../common.css'



const Product = () => {
    const { filteredProduct } = useFilter()
    return (
        <main className="productpage-grid-container">
            <Sidebar />
            <section className="productpage-content d-flex">
                {
                    filteredProduct().map((Obj) => (
                        <ProductCard key={Obj._id} productObj={Obj} />
                    ))
                }
            </section>
        </main>
    )
}

export default Product