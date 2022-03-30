import React from "react"
import { ToastContainer } from "react-toastify"
import { ProductCard, Sidebar } from "../../components/index"
import { useFilter } from '../../Context/Filter-Context'
import { useProducts } from "../../Context/Product-Context"
import 'react-toastify/dist/ReactToastify.css';
import "./product.css"
import '../common.css'




const Product = () => {
    const { filteredProduct } = useFilter()
    const { loadingFromProducts } = useProducts()
    return (
        <main className="productpage-grid-container">
            <Sidebar />
            <ToastContainer position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            {
                loadingFromProducts ?
                    <section className="padding-md">
                        <h1 className="text-center head-xl">Loading...</h1>
                    </section> :
                    <section className="productpage-content d-flex">
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