import React from 'react'

export const Pagination = ({productsPerPage, totalProducts, setCurrentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='pagination-wrapper'>
        <ul className="styled-list">
                {
                    pageNumbers.map(number => (
                        <li key={number} 
                            className="list-style-inline pagination-nav-pills"
                            onClick={()=>setCurrentPage(number)}>
                            {number}
                        </li>
                    ))
                }
          </ul>
    </div>
  )
}

