import {useState} from "react"
import { ProductCard, Sidebar , Pagination} from "../../components/index"
import { useFilter } from '../../Context'
import "./product.css"
import '../common.css'

const Product = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(6)
    const { filteredProduct , loadingFromProducts} = useFilter()

    // Set current Products
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const totalProducts = filteredProduct()
    const currentPageProducts = totalProducts.slice(indexOfFirstProduct,indexOfLastProduct)

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
                        currentPageProducts.map((Obj) => (
                            <ProductCard key={Obj._id} productObj={Obj} />
                        ))
                    }
                    <Pagination 
                    productsPerPage={productsPerPage} 
                    totalProducts={totalProducts.length} 
                    setCurrentPage={setCurrentPage}
                    />
                </section>
            }
        </main>
    )
}

export default Product