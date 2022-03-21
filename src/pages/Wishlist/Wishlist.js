import React from "react"
import "./wishlist.css"

import { useWishlist } from "../../Context/Wishlist-Context"
import { WishlistCard } from "../../components"

const Wishlist = () => {
    const { wishlistState } = useWishlist()
    const { wishlistItems } = wishlistState
    return (
        <section className="content d-flex padding-md">
            {
                wishlistItems.length > 0 ? wishlistItems.map(productObj => (
                    <WishlistCard productObj={productObj} />
                )) : <div>Wishlist is empty</div>
            }
        </section>
    )
}

export default Wishlist