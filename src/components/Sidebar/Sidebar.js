import React from "react"
import { useFilter } from "../../Context/Filter-Context"
import SidebarCSS from "./sidebar.module.css"

const Sidebar = () => {
    const { filterDispatch, filterState } = useFilter()
    const { byPrice, byCategoryNames, byRating, price } = filterState

    const clickHandler = (item) => {
        const index = byCategoryNames.findIndex(ele => ele === item)
        if (index === -1) filterDispatch({ type: "FILTER_BY_CATEGORY", payload: item })
        else filterDispatch({ type: "REMOVE_BY_CATEGORY", payload: item })
    }

    const resetAll = () => {
        filterDispatch({ type: "CLEAR" })
    }

    return (
        <section className={SidebarCSS.sidebar__container}>
            <div className="d-flex">
                <h2 className="head-md margin-sm">Filters</h2>
                <button className="btn btn-link btn-secondary head-sm margin-lf" onClick={resetAll}>
                    Clear
                </button>
            </div>

            <form className="margin-sm">
                <div>
                    <h2 className="head-md d-inline_block margin-xxs">Price </h2>
                    <span className="text-sm d-inline_block margin-xxs">{price}</span>
                </div>
                <input
                    id="slider"
                    type="range"
                    min="300"
                    max="2400"
                    step="300"
                    value={price}
                    onChange={(e) => filterDispatch({ type: "FILTER_BY_PRICE", payload: Number(e.target.value) })}
                />
                <label htmlFor="slider" className="head-sm d-flex">
                    <span className="margin-xxs">200</span>
                    <span className="margin-xxs">1200</span>
                    <span className="margin-xxs">2400</span>
                </label>
            </form>

            <form className="margin-sm">
                <h2 className="head-md">Category</h2>
                <ul className="styled-list list-style-none d-inline_block">
                    <li>
                        <input
                            id="T-shirt"
                            type="checkbox"
                            name="category"
                            onChange={() => clickHandler("T-shirt")}
                            checked={byCategoryNames.includes("T-shirt")}
                        />
                        <label htmlFor="T-shirt" className="form-label padding-xs"> T-shirt</label>
                    </li>
                    <li>
                        <input
                            id="Hoodie"
                            type="checkbox"
                            name="category"
                            onChange={() => clickHandler("Hoodie")}
                            checked={byCategoryNames.includes("Hoodie")}
                        />
                        <label htmlFor="Hoodie" className="form-label padding-xs"> Hoodie</label>
                    </li>
                    <li>
                        <input
                            id="Jacket"
                            type="checkbox"
                            name="category"
                            onChange={() => clickHandler("Jacket")}
                            checked={byCategoryNames.includes("Jacket")}
                        />
                        <label htmlFor="Jacket" className="form-label padding-xs"> Jacket</label>
                    </li>
                    <li>
                        <input
                            id="Woman T-shirt"
                            type="checkbox"
                            name="category"
                            onChange={() => clickHandler("Woman T-shirt")}
                            checked={byCategoryNames.includes("Woman T-shirt")}
                        />
                        <label htmlFor="Woman T-shirt" className="form-label padding-xs"> Woman T-shirt</label>
                    </li>
                </ul>
            </form>

            <form className="margin-sm">
                <h2 className="head-md">Ratings</h2>
                <ul className="styled-list list-style-none d-inline_block">
                    <li>
                        <input
                            id="4Stars & above"
                            type="radio"
                            name="ratings"
                            onChange={() => filterDispatch({ type: "SORT_BY_RATING", payload: 4 })}
                            checked={byRating === 4 ? true : false}
                        />
                        <label htmlFor="4Stars & above" className="form-label padding-xs">4Stars & above</label>
                    </li>
                    <li>
                        <input
                            id="3Stars & above"
                            type="radio"
                            name="ratings"
                            onChange={() => filterDispatch({ type: "SORT_BY_RATING", payload: 3 })}
                            checked={byRating === 3 ? true : false}
                        />
                        <label htmlFor="3Stars & above" className="form-label padding-xs">3Stars & above</label>
                    </li>
                    <li>
                        <input
                            id="2Stars & above"
                            type="radio"
                            name="ratings"
                            onChange={() => filterDispatch({ type: "SORT_BY_RATING", payload: 2 })}
                            checked={byRating === 2 ? true : false}
                        />
                        <label htmlFor="2Stars & above" className="form-label padding-xs">2Stars & above</label>
                    </li>
                    <li>
                        <input
                            id="1Stars & above"
                            type="radio"
                            name="ratings"
                            onChange={() => filterDispatch({ type: "SORT_BY_RATING", payload: 1 })}
                            checked={byRating === 1 ? true : false}
                        />
                        <label htmlFor="1Stars & above" className="form-label padding-xs">1Stars & above</label>
                    </li>
                </ul>
            </form>

            <form className="margin-sm">
                <h2 className="head-md">Sort by</h2>
                <ul className="styled-list list-style-none d-inline_block">
                    <li>
                        <input
                            type="radio"
                            name="sort"
                            id="Low_to_High"
                            onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "Low_to_High" })}
                            checked={byPrice === "Low_to_High" ? true : false}
                        />
                        <label htmlFor="Low_to_High" className="form-label padding-xs">Price-Low to High</label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="sort"
                            id="High_to_Low"
                            onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "High_to_Low" })}
                            checked={byPrice === "High_to_Low" ? true : false}
                        />
                        <label htmlFor="High_to_Low" className="form-label padding-xs">Price-High to Low</label>
                    </li>
                </ul>
            </form>
        </section>
    )
}

export default Sidebar