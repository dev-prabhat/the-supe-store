import { NavLink } from "react-router-dom"
import { useCart, useWishlist, useAuth } from "../Context"


export default function Navigation() {
    const { cartItems } = useCart()
    const { wishlistItems } = useWishlist()
    const { token, logoutHandler } = useAuth()

    return (
        <nav className="nav-bar d-flex">
            <NavLink to="/" className="btn-link d-inline_block"><h1 className="head-lg">SupeStore</h1></NavLink>
            <NavLink to="/products" className="btn-link d-inline_block"><h1 className="head-sm">Products</h1></NavLink>
            <div className="search-container position-rel">
                <input
                    className="text-center padding-xs form-field border-radius-xs padding-xs text-sm"
                    type="text"
                    placeholder="Search"
                />
                <i className="fas fa-search position-abs top-50 search-icon"></i>
            </div>
            <NavLink className="badge-container d-inline_block margin-sm" to="/wishlist">
                    <i className="far fa-heart badge-link nav-wishlist-icon"></i>
                    {
                        wishlistItems.length > 0 && <span
                            className="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl">
                            {wishlistItems.length}
                        </span>
                    }

            </NavLink>

            <NavLink to="/cart" className="badge-container d-inline_block margin-sm">
                    <i className="fas fa-shopping-cart badge-link nav-cart-icon"></i>
                    {
                        cartItems.length > 0 && <span className="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl">{cartItems.length}
                        </span>
                    }
            </NavLink>
            {
                token ? <button className="btn btn-primary margin-xs" onClick={logoutHandler}>Logout</button> : (
                    <>
                        <NavLink to="/signup" className="btn btn-primary btn-link margin-xs d-inline_block">SignUp</NavLink>
                        <NavLink to="/login" className="btn btn-secondary btn-link margin-xs d-inline_block">Login</NavLink>
                    </>
                )
            }

            <NavLink to="/mock"/>
        </nav>
    )
}
