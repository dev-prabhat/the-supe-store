import React from "react"

const Sidebar = () => {
    return (
        <section className="side-bar padding-xs">
            <div className="d-flex">
                <h2 className="head-md margin-sm">Filter</h2>
                <button className="btn btn-link btn-secondary head-sm margin-lf">
                    Clear
                </button>
            </div>

            <form className="margin-sm">
                <label className="head-md font-weight-semibold">Price</label><br />
                <input type="range" min="1" max="100" value="50" />
            </form>

            <form className="margin-sm">
                <h2 className="head-md">Category</h2>
                <input type="checkbox" />
                <label className="form-label padding-xs"> Men Collection</label> <br />
                <input type="checkbox" />
                <label className="form-label padding-xs"> Women Collection</label> <br />
            </form>

            <form className="margin-sm">
                <h2 className="head-md">Ratings</h2>
                <input type="radio" name="ratings" value="4 & above" />
                <label className="form-label padding-xs">4Stars & above</label><br />
                <input type="radio" name="ratings" value="3 & above" />
                <label className="form-label padding-xs">3Stars & above</label><br />
                <input type="radio" name="ratings" value="2 & above" />
                <label className="form-label padding-xs">2Stars & above</label><br />
                <input type="radio" name="ratings" value="1 & above" />
                <label className="form-label padding-xs">1Stars & above</label><br />
            </form>

            <form className="margin-sm">
                <h2 className="head-md">Sort by</h2>
                <input type="radio" name="sort" value="low-to-high" />
                <label className="form-label padding-xs">Price-Low to High</label><br />
                <input type="radio" name="sort" value="high-to-low" />
                <label className="form-label padding-xs">Price-High to Low</label><br />
            </form>
        </section>
    )
}

export default Sidebar