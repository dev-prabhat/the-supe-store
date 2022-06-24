import {useNavigate} from "react-router-dom"
import { useFilter } from "../../Context"
import CategoryCSS from "./categoryCard.module.css"

const CategoryCard = ({ category }) => {
    const {filterDispatch} = useFilter()
    const navigate = useNavigate()


    return(
        <div className={CategoryCSS.card__image} 
          onClick={()=>{
            filterDispatch({ type: "FILTER_FROM_HOMEPAGE", payload: category.categoryName })
            navigate("/products")
          }}>
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
}

export default CategoryCard