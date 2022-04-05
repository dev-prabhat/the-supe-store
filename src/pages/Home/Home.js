import React from 'react'
import { useProducts } from "../../Context/Product-Context"
import { CategoryCard } from "../../components/index"
import "./style.css"
import '../common.css'

import landing_page from '../../assests/images/marvel-tee-1.jpg';



const Home = () => {
    const {categoriesFromBackend} = useProducts()
    return (
        <main className="main-section">
            <section className="banner-image-container">
                <img
                    className="img-responsive"
                    src={landing_page}
                    alt="landing_page"
                />
            </section>
            <p className='text-lg text-center'>Category</p>
            <section className="container d-flex">
                {
                    categoriesFromBackend.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))
                }
            </section>
        </main>
    )
}

export default Home