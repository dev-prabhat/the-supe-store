import React from "react"

const CategoryCard = ({ category }) => (
    <div className="card-img position-rel margin-xs" >
        <img
            className="img-responsive"
            src={category.image}
            alt={category.alt}
        />
        <div className="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm">
            <p className="btn-link">{category.categoryName}</p>
        </div>
    </div>
)

export default CategoryCard