import React from 'react'
// import Sidebar from './SideBar1'
import '../cssFiles/dashboard.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Dashboard() {
  const [stockCount, setStockCount] = useState(0);
  const [sup,setSup] = useState(0);
  // const [reqmed,setreqMed] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:4000/user/count")
    .then((res) => setStockCount(res.data.count))
    .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:4000/user/sup")
    .then((res) => setSup(res.data.count))
    .catch((err) => console.error(err));
  }, []);
  // useEffect(() => {
  //   axios.get("http://localhost:4000/user/reqmed")
  //   .then((res) => setreqMed(res.data.count))
  //   .catch((err) => console.error(err));
  // }, []);
  return (
    <div className='pos'>
    <div className='div row-3' >
        <div id = "content" className='px-3 col-12'>
      <div className='container-fluid'>
          <div className='abcd row g-3 my-2 '>
              <div className='  col-md-3 p-1'>
                  <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                      <div>
                          <h3 className='fs-2 ww'>{stockCount}</h3>
                          <p  className='fs-2 thee'> STOCKS</p>
                      </div>
                      <i className='bi bi-activity p-5 fs-1'></i>
                  </div>
              </div>
              <div className='col-md-3 p-1'>
                  <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                      <div>
                          <h3 className='fs-2 ww'>{stockCount}</h3>
                          <p  className='fs-2 thee'> EXPIRED DRUGS</p>
                      </div>
                      <i className='bi bi-prescription p-3 fs-1'></i>
                  </div>
              </div>
              <div className='col-md-3 p-1'>
                  <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                      <div>
                          <h3 className='fs-2 ww'>{sup}</h3>
                          <p  className='fs-2 thee'> NO OF SUPPLIERS</p>
                      </div>
                      <i className='bi bi-people p-3 fs-1'></i>
                  </div>
              </div>
              <div className='col-md-3 p-1'>
                  <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                      <div>
                          <h3 className='fs-2 ww'>{stockCount}</h3>
                          <p  className='fs-2 thee'>OUT OF STOCKS</p>
                      </div>
                      <i className='bi bi-cart-plus p-3 fs-1'></i>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div>
    </div>
  )
}

export default Dashboard




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [stockCount, setStockCount] = useState(0);

//   useEffect(() => {
//     axios.get("http://localhost:4000/user/count")
//     .then((res) => setStockCount(res.data.count))
//     .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <center><p>Number of Stocks: {stockCount}</p></center>
//     </div>
//   );
// };

// export default Dashboard;

