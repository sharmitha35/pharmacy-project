import React from 'react';
import { Link } from 'react-router-dom'
import '../cssFiles/sidebar.css';


const Sidebar = (props) => {
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
                <Link to="/Dash">
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
                      <Link to="/Requestedlist">Requested List
                      </Link>
                    </li>
                    <li>
                      <Link to="/Requestmedicine">Request Medicine</Link>
                    </li>
                    <li>
                      <Link to="/Addmedicine">Add Medicine</Link>
                    </li>
                    <li>
                      <Link to="/Medicinelist">Medicinelist</Link>
                    </li>

                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <Link to="#">
                  <i className="far fa-user" />
                  <span>Supplier</span>
                </Link>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link to="/Supplierlist">Supplier List</Link>
                    </li>
                    <li>
                      <Link to="/Addsupplier">Add Supplier</Link>
                    </li>

                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <Link to="#">
                  <i className="fa fa-chart-line" />
                  <span>Charts</span>
                </Link>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link to="#">Pie chart</Link>
                    </li>
                    <li>
                      <Link to="#">Line chart</Link>
                    </li>
                    <li>
                      <Link to="#">Bar chart</Link>
                    </li>
                    <li>
                      <Link to="#">Histogram</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="header-menu">
                <span>Extra</span>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-book" />
                  <span>Documentation</span>
                  <span className="badge badge-pill badge-primary">Beta</span>
                </Link>
              </li>
              <li>
                <Link to="/Calender">
                  <i className="fa fa-calendar" />
                  <span>Calendar</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-folder" />
                  <span>Examples</span>
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

export default Sidebar;
