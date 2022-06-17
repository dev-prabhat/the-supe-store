import React from "react"
import { ProductCard, Sidebar } from "../../components/index"
import { useFilter, useProducts } from '../../Context'
import "./product.css"
import '../common.css'

const Product = () => {
    const { filteredProduct } = useFilter()
    const { loadingFromProducts } = useProducts()
    return (
        <main className="productpage-grid-container">
            <Sidebar />
            {
                loadingFromProducts ?
                    <section className="padding-md">
                        <h1 className="text-center head-xl">Loading...</h1>
                    </section> :
                    <section className="productpage-content">
                        {
                            filteredProduct().map((Obj) => (
                                <ProductCard key={Obj._id} productObj={Obj} />
                            ))
                        }
                    </section>
            }
        </main>
    )
}

export default Product