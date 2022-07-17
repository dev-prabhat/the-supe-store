import { useWishlist } from "../../Context"
import { ProductCard} from "../../components"
import { useDocument } from "../../customHooks"
import WishlistCSS  from "./wishlist.module.css"

const Wishlist = () => {
    useDocument("WishList")
    const { wishlistItems } = useWishlist()
    return (
        <>
           {  
             wishlistItems.length > 0 ? 
                <main className={WishlistCSS.grid__container}>
                {
                    wishlistItems.length > 0 &&
                        <section className={WishlistCSS.products__container}>
                            {
                                wishlistItems.map(productObj => (
                                    <ProductCard key={productObj._id} productObj={productObj} isWishlist={true}/>
                                ))
                            }
                        </section> 
                }
               </main>:
            <main className={WishlistCSS.empty__wishlist__grid}>
                <h1 className="text-center head-xl">Your Wishlist is Empty</h1>
            </main>
           }  
        </>
    )
}

export default Wishlist