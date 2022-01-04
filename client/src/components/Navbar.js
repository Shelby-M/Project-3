import React from 'react';


function Navbar(props) {
  const tabs = ['Home', 'Login', 'Signup', 'Post'];
  return (
    <nav>
    <div>
    <ul>
      {tabs.map(tab => (
        <li className="nav-link" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
      
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>
  );
}

export default Navbar;