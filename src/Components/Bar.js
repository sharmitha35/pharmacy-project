import React from 'react';
import { Link } from 'react-router-dom'
import '../cssFiles/sidebar.css';


const Bar = (props) => {
  return (
    <div className='split' >
    <div className="page-wrapper chiller-theme toggled ">
      <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
        <i className="fas fa-bars" />
      </Link>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <Link to="/"> <i className='fa fa-star'>..</i>STAR PHARMACY..<i className='fa fa-star'></i></Link>
            <div id="close-sidebar">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <li >
                <Link to="/SupDash">
                  <i className="fa fa-tachometer-alt" />
                  <span>Dashboard</span>
                  {/* <span className="badge badge-pill badge-warning">New</span> */}
                </Link>

              </li>
              <li className="sidebar-dropdown">
                <Link to="#">
                  <i className="fa fa-shopping-cart" />
                  <span>Medicine </span>

                </Link>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link to="/SupDash">Requested List
                      </Link>
                    </li>
                  
                    

                  </ul>
                </div>
              </li>
            

              <li className="header-menu">
                <span>Extra</span>
              </li>
              
              <li>
                <Link to="/Cal">
                  <i className="fa fa-calendar" />
                  <span>Calendar</span>
                </Link>
              </li>
              
            </ul>
          </div>

        </div>

        <div className="sidebar-footer">

          <Link to="#">
            <i className="fa fa-power-off" />
          </Link>
        </div>
      </nav>



    </div>
    </div>
  );
}

export default Bar;
