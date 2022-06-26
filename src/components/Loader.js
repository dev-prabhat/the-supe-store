import ReactLoading from 'react-loading';
import { useAuth , useCart, useWishlist , useCategories} from '../Context';

export const Loader = () => {
    const {authLoader} = useAuth()
    const {cartLoader} = useCart()
    const { wishListLoader} = useWishlist()
    const {categoryLoader} = useCategories()
    if(!authLoader && !cartLoader && !wishListLoader && !categoryLoader) return null
    return(
        <div className="loader__wrapper">
            {authLoader && <ReactLoading type={"spinningBubbles"} color={"#ffa500"} width="10rem"/>}
            {cartLoader && <ReactLoading type={"spinningBubbles"} color={"#ffa500"} width="10rem"/>}
            {wishListLoader && <ReactLoading type={"spinningBubbles"} color={"#ffa500"} width="10rem"/>}
            {categoryLoader && <ReactLoading type={"spinningBubbles"} color={"#ffa500"} width="10rem"/>}
        </div>
    )
}