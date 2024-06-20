import './style.css';

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination d-flex justify-center mt-8">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} className="page-link" type="button">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Pagination;
