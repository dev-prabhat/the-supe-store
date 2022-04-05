import React from "react"
import "./wishlist.css"

import { useWishlist } from "../../Context/Wishlist-Context"
import { WishlistCard } from "../../components"

const Wishlist = () => {
    const { wishlistItems } = useWishlist()
    return (
        <>
            {
                wishlistItems.length > 0 ?
                    <section className="content d-flex padding-md">
                        {
                            wishlistItems.map(productObj => (
                                <WishlistCard key={productObj._id} productObj={productObj} />
                            ))
                        }
                    </section> :
                    <section className="padding-md">
                        <h1 className="text-center head-xl">Your Wishlist is Empty</h1>
                    </section>
            }
        </>
    )
}

export default Wishlist