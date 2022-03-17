import React from "react"

export default function Navigation() {
    return (
        <nav class="nav-bar d-flex">
            <a href="/" class="btn-link d-inline_block"><h1 class="head-lg">TheSupeStore</h1></a>
            <a href="/" class="btn-link d-inline_block"><h1 class="head-sm">Home</h1></a>
            <a href="/" class="btn-link d-inline_block"><h1 class="head-sm">Products</h1></a>
            <a href="/" class="btn-link d-inline_block"><h1 class="head-sm">Collections</h1></a>
            <div class="search-container position-rel">
                <input
                    class="text-center padding-xs form-field border-radius-xs padding-xs text-sm"
                    type="text"
                    placeholder="Search"
                />
                <i class="fas fa-search position-abs top-50 search-icon"></i>
            </div>
            <a
                class="badge-container d-inline_block margin-md"
                href="/pages/wishlist/wishlist.html"
            >
                <i class="far fa-heart badge-link nav-wishlist-icon"></i>
                <span
                    class="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl"
                >2</span
                >
            </a>
            <a
                class="badge-container d-inline_block margin-md"
                href="/pages/cart/cart.html"
            >
                <i class="fas fa-shopping-cart badge-link nav-cart-icon"></i>
                <span
                    class="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl"
                >2</span
                >
            </a>
            <a
                class="btn btn-primary btn-link margin-xs d-inline_block"
                href="/pages/signUp/signUp.html"
            >SignUp</a
            >
            <a
                class="btn btn-secondary btn-link margin-xs d-inline_block"
                href="/pages/login/login.html"
            >Login</a
            >
        </nav>
    )
}
