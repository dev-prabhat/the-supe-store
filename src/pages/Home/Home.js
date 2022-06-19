import React from 'react'
import { useCategories } from "../../Context"
import { CategoryCard } from "../../components/index"
import landing_page from '../../assests/images/marvel-tee-1.jpg';
import "./home.css"
import '../common.css'

const Home = () => {
    const {categoriesFromBackend} = useCategories()
    return (
        <main className="home-main">
            <figure className="banner-image-container">
                <img
                    className="img-responsive"
                    src={landing_page}
                    alt="landing_page"
                />
            </figure>
            <p className='text-lg text-center'>Category</p>
            <section className="category-container">
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