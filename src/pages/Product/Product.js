import {useState} from "react"
import { ProductCard, Sidebar , Pagination} from "../../components/index"
import { useFilter } from '../../Context'
import { useDocument} from "../../customHooks"
import ProductPageCSS from  "./product.module.css"
import '../common.css'

const Product = () => {
    useDocument("Products")
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(6)
    const { filteredProduct , loadingFromProducts} = useFilter()

    // Set current Products
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const totalProducts = filteredProduct()
    const currentPageProducts = totalProducts.slice(indexOfFirstProduct,indexOfLastProduct)

    return (
        <main className={ProductPageCSS.grid__container }>
            <Sidebar />
            {
                loadingFromProducts ?
                <section className="padding-md">
                    <h1 className="text-center head-xl">Loading...</h1>
                </section> :
                <>
                    <section className={ProductPageCSS.products__container}>
                        {
                            currentPageProducts.map((Obj) => (
                                <ProductCard key={Obj._id} productObj={Obj} />
                            ))
                        }
                    </section>
                    <Pagination 
                        productsPerPage={productsPerPage} 
                        totalProducts={totalProducts.length} 
                        setCurrentPage={setCurrentPage}
                        />
                </> 
            }
        </main>
    )
}

export default Product