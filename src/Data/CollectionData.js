const getImg = (imageNumber) => process.env.PUBLIC_URL + `/images/img${imageNumber}.jpg`


const CollectionData = [
    {
        id: 1,
        image: getImg(1),
        name: "Men Tshirt"
    },
    {
        id: 2,
        image: getImg(5),
        name: "Hoodie Collection"
    },
    {
        id: 3,
        image: getImg(8),
        name: "Women Tshirt"
    },
    {
        id: 4,
        image: getImg(11),
        name: "Jacket Collection"
    }
]

export default CollectionData