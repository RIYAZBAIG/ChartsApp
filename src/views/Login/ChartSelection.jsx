import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import routes from "routes.js";
import { NavItem } from "reactstrap";
import Sidebar from "components/Sidebar/Sidebar.js";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

import logo from "assets/img/react-logo.png";
import Footer from "components/Footer/Footer";


import Modal from 'react-modal';

// Define the styles for your modal content
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '400px',
  },
};
const ChartSelection = () => {
  const location = useLocation();
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    // return "Brand";
  };

  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else if (prop.layout === "/admin" && prop.path === "/dashboard1") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };



  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(true);
  };





  return (
    <BackgroundColorContext.Consumer   >
    {({ color, changeColor }) => (
      
      <React.Fragment  >
       
        <div className="wrapper"  >

          <Sidebar
            routes={routes}
            logo={{
              outterLink: "https://www.creative-tim.com/",
              text: "Creative Tim",
              imgSrc: logo,
            }}
            toggleSidebar={toggleSidebar}
          />
          <div className="main-panel" data={color}>
            <AdminNavbar
              brandText={getBrandText(location.pathname)}
              toggleSidebar={toggleSidebar}
              sidebarOpened={sidebarOpened}
            />
            <div     >
             
              <div style={{ textAlign: "center"  }}>

               
      
      <div  >
      <h1>Admin Dashboard</h1>
      {/* <button  class=" btn btn-primary btn-round"   onClick={openModal}  >Open Modal</button> */}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* Modal Content */}
        <h2  >Modal Title</h2>
        <p>Modal content goes here.</p>
        <div class="card">
  <div class="card-body" style={{marginBottom:"25px"}} >
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>

<br />


    </div>
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>

<div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>



    </div>
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>



    </div>
    <div class="form-check">
    <label class="form-check-label">
    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;&nbsp;
    ChartName&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; CreatedBy &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Date
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
</label>



    </div>

    </div>
    <br />
    


  </div>
</div>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>


      <br></br>
     

     

     
      
    </div>
            </div>

          </div>
          
          

<Footer/>
        
          </div>
          

      </React.Fragment>
    )}
  </BackgroundColorContext.Consumer>
  );
};

export default ChartSelection;
