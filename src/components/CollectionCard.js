import React from "react"

const CollectionCard = ({ image, name }) => (
    <div className="card-img position-rel margin-xs" >
        <img
            className="img-responsive"
            src={image}
            alt="men_clothing"
        />
        <div className="card-badge-secondary position-abs top-50 left-0 padding-xs d-100 head-sm">
            <p className="btn-link">{name}</p>
        </div>
    </div>
)

export default CollectionCard