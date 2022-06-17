import React from "react"
import { useWishlist } from "../../Context"
import { WishlistCard } from "../../components"
import "./wishlist.css"

const Wishlist = () => {
    const { wishlistItems } = useWishlist()
    return (
        <>
           {  
             wishlistItems.length > 0 ? 
                <main className="wishlistpage-container">
                {
                    wishlistItems.length > 0 &&
                        <section className="wishlist-content padding-sm">
                            {
                                wishlistItems.map(productObj => (
                                    <WishlistCard key={productObj._id} productObj={productObj} />
                                ))
                            }
                        </section> 
                }
               </main>:
            <main className="empty-wishlist">
                <h1 className="text-center head-xl">Your Wishlist is Empty</h1>
            </main>
           }  
        </>
    )
}

export default Wishlist