import React from 'react'
import { useCategories } from "../../Context"
import { CategoryCard } from "../../components/index"
import {useDocument } from "../../customHooks"
import landing_page from '../../assests/images/marvel-tee-1.jpg';
import HomeCSS from "./home.module.css"
import "../common.css"

const Home = () => {
    useDocument("Home")
    const {categoriesFromBackend} = useCategories()
    return (
        <main className={HomeCSS.main}>
            <figure className={HomeCSS.image__container}>
                <img
                    className="img-responsive"
                    src={landing_page}
                    alt="landing_page"
                />
            </figure>
            <p className='text-lg text-center'>Category</p>
            <section className={HomeCSS.categories__container}>
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