import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../Context/Cart-Context"
import { useWishlist } from "../Context/Wishlist-Context"

export default function Navigation() {
    const { cartState } = useCart()
    const { wishlistState } = useWishlist()
    return (
        <nav className="nav-bar d-flex">
            <Link to="/" className="btn-link d-inline_block"><h1 className="head-lg">TheSupeStore</h1></Link>
            <Link to="/" className="btn-link d-inline_block"><h1 className="head-sm">Home</h1></Link>
            <Link to="/product" className="btn-link d-inline_block"><h1 className="head-sm">Products</h1></Link>
            <div className="search-container position-rel">
                <input
                    className="text-center padding-xs form-field border-radius-xs padding-xs text-sm"
                    type="text"
                    placeholder="Search"
                />
                <i className="fas fa-search position-abs top-50 search-icon"></i>
            </div>
            <Link className="badge-container d-inline_block margin-md" to="/wishlist">
                <i className="far fa-heart badge-link nav-wishlist-icon"></i>
                {
                    wishlistState.wishlistItems.length > 0 && <span
                        className="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl">
                        {wishlistState.wishlistItems.length}
                    </span>
                }

            </Link>
            <Link to="/cart" className="badge-container d-inline_block margin-md">
                <i className="fas fa-shopping-cart badge-link nav-cart-icon"></i>
                {
                    cartState.cartItems.length > 0 && <span className="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl">{cartState.cartItems.length}
                    </span>
                }
            </Link>
            <Link to="/signUp" className="btn btn-primary btn-link margin-xs d-inline_block">SignUp</Link>
            <Link to="/login" className="btn btn-secondary btn-link margin-xs d-inline_block">Login</Link>
            <Link to="/mock"></Link>
        </nav>
    )
}
