import { Link , useNavigate} from "react-router-dom"
import { useCart } from "../../Context/Cart-Context"
import { useWishlist } from "../../Context/Wishlist-Context"
import { useAuth } from "../../Context/Auth-Context"
import { MdShoppingCart,MdFavoriteBorder ,MdFavorite, MdStar , MdOutlineCancel} from "react-icons/md";
import ProductCardCSS from "./productCard.module.css"


const ProductCard = ({ productObj , isWishlist = false }) => {
    const navigate = useNavigate()
    const { name, image, originalPrice, star, tag, _id } = productObj
    const {  cartItems , addToCart } = useCart()
    const { token } = useAuth()
    const { addToWishList, wishlistItems , deleteFromWishList } = useWishlist()

    const isProductInWishList = wishlistItems.findIndex(p => p._id === productObj._id) === -1 ? false : true
    const isProductInCart = cartItems.findIndex(p => p._id === productObj._id) === -1 ? false : true

    const cartHandler = (productObj) => {
        if (token) addToCart(productObj)
        else navigate("/login",{replace:true})
    }

    const wishListHandler = (productObj) => {
        if (token) addToWishList(productObj)
        else navigate("/login",{replace:true})
    }

    return (
        <div className={ProductCardCSS.card__container}>
            <div className={ProductCardCSS.product__img}>
                <img
                    className="img-responsive"
                    src={image}
                    alt="black_cap"
                />
                {
                    isWishlist ? 
                        <MdOutlineCancel 
                            className={ProductCardCSS.wishlist__icon} 
                            onClick={() => deleteFromWishList(_id)} /> : 
                    <>
                       {
                            isProductInWishList
                                ? <MdFavorite 
                                    className={ProductCardCSS.wishlist__icon} 
                                    onClick={() => deleteFromWishList(_id)}/>
                                : <MdFavoriteBorder
                                    className={ProductCardCSS.wishlist__icon}
                                    onClick={() => wishListHandler(productObj)} />
                        }
                    </>
                }
                <span className={ProductCardCSS.rating__info}>
                    {star} <MdStar className={ProductCardCSS.star} />
                </span>
                {tag && <span className={ProductCardCSS.trending__info}>{tag}</span>}
            </div>
           
            <div className="card-description">
                <p className="text-md font-weight-semibold text-center">{name}</p>
                <p className="text-sm text-gray text-center">Rs {originalPrice.toLocaleString('en-IN')}</p>
                {
                    isProductInCart
                        ? <Link
                            to="/cart"
                            className="btn btn-primary btn-link head-sm d-100 d-inline_block text-center">
                            Go to Cart
                        </Link>
                        : <button
                            type="button"
                            className="btn btn-primary head-sm d-100"
                            onClick={() => cartHandler(productObj)}>
                            <MdShoppingCart className={ProductCardCSS.cart__icon} />Add to cart
                        </button>
                }
            </div>
        </div>
    )
}

export default ProductCard