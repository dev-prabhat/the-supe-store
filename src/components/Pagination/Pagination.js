import PaginationCSS from "./pagination.module.css"

export const Pagination = ({productsPerPage, totalProducts, setCurrentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={PaginationCSS.pagination__wrapper}>
        <ul className="styled-list">
                {
                    pageNumbers.map(number => (
                        <li key={number} 
                            className={PaginationCSS.pagination__pills}
                            onClick={()=>setCurrentPage(number)}>
                            {number}
                        </li>
                    ))
                }
          </ul>
    </div>
  )
}

