import React, { useEffect } from 'react'

const Pagination =({postPerPage, totalPost, paginate})=> {


    useEffect(()=>{
    console.log('==xxx==', postPerPage)

    },[])
    const pageNumbers =[];

    for(let i=0; i < Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number =>(
                        <li key={number} className="page-item">
                            <a href="!#" className="page-link"
                            onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination
