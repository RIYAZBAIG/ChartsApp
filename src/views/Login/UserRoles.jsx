import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { TextField } from '@mui/material';
import Footer from 'components/Footer/Footer';

const UserRoles = () => {
//   const [isOpen, setIsOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };


  // const handleUser = () => {
  //   window.location.href = "/EditUser";
  // };
  // Define the number of items per page based on the current page
  const itemsPerPage = currentPage === 1 ? 11 : 4;

  // Function to toggle the dropdown open/closed.
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

// const userRoles = [
//     { id: 1, name: 'Product Admin', status: 'Active' },
//     { id: 2, name: 'System Admin', status: 'Inactive' },
//     // Add more user roles here
//   ];

//   const handleEditClick = (id) => {
//     console.log(`Edit button clicked for role with ID ${id}`);
//   };

//   const handleDeleteClick = (id) => {
//     console.log(`Delete button clicked for role with ID ${id}`);
//   };



  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',

backgroundColor: '#212529', // Light white background color
    padding: '20px',
    position: 'relative',
  };

  const tableStyle = {
    width: '100%',
    maxWidth: '600px', // Limit the table width for responsiveness
    margin: '20px 0',
    borderCollapse: 'collapse',
    backgroundColor: "#212529",
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    marginTop: '60px',
    marginBottom:"15px"

  };

  const thTdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  const userRoles = [
    { id: 1, name: 'Product Admin', status: 'Active' },
    { id: 2, name: 'System Admin', status: 'Inactive' },
    { id: 3, name: 'Admin', status: 'Active' },
    { id: 4, name: 'Credit Mis', status: 'Inactive' },
    { id: 5, name: ' Admin', status: 'Active' },
    { id: 6, name: 'System Admin', status: 'Inactive' },
    { id: 7, name: 'Admin', status: 'Active' },
    { id: 8, name: 'Product Admin', status: 'Inactive' },
    { id: 9, name: 'M D', status: 'Active' },
    { id: 10, name: 'DCAMLCO', status: 'Inactive' },
    { id: 11, name: 'HoCRM', status: 'Active' },
    { id: 12, name: 'Ho SC', status: 'Inactive' },
    { id: 13, name: 'RegiOnal Credit head(RCH)', status: 'Inactive' },
    { id: 14, name: 'MC ', status: 'Active' },
    { id: 15, name: 'Risk Manager', status: 'Inactive' },
    // Add more data objects here
  ];

  // const handleEditClick = (id) => {
  //   console.log(`Edit button clicked for role with ID ${id}`);
  // };

  const handleDeleteClick = (id) => {
    console.log(`Delete button clicked for role with ID ${id}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={containerStyle}>
      <table style={tableStyle}  >
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Status</th>
            <th style={thTdStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {userRoles
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((role) => (
              <tr key={role.id}>
                <td style={thTdStyle}>{role.id}</td>
                <td style={thTdStyle}>{role.name}</td>
                <td style={thTdStyle}>{role.status}</td>
                <td style={thTdStyle}>
  <div>
    <svg
      width="4"
      height="13"
      viewBox="0 0 4 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
      onClick={() => toggleDropdown(role.id)}
    >
      <circle cx="2" cy="2" r="2" fill="orange" />
      <circle cx="2" cy="6.5" r="2" fill="white" />
      <circle cx="2" cy="11" r="2" fill="green" />
    </svg>

    {openDropdownId === role.id && (
      <div>
        {/* <p onClick={() => handleEditClick(role.id)}>Edit</p> */}
        <Link to="/EditUser" >
        {/* <p onClick={handleUser} >Edit</p> */}
        <p  >Edit</p>

        </Link>
        <p onClick={() => handleDeleteClick(role.id)}>Delete</p>
      </div>
    )}
  </div>
</td>

              </tr>
            ))}
        </tbody>
      </table>
      <div
        className="button-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-1240px',
          marginRight:"-245px"
        }}
      >
        <Link to="/RolePermissionPage" className="button"  >
          {/* <Button>Add User Roles</Button> */}
          
          {/* <button type="button" class="btn btn-success">Success</button> */}
          
        </Link>
        {/* <Button> User Roles</Button> */}
        <button class="btn btn-primary btn-round">
  <i class="tim-icons icon-heart-2"  >User Roles</i> 
</button>

{/* <button class="btn btn-primary btn-round">User Role</button> */}

        {/* <Button className="export-button">Export Data</Button> */}

<button class="btn btn-primary btn-round">Export Data</button>

        {/* <input type="text" name="" id=""  placeholder='Filter' style={{backgroundColor: "white", width:"75px", height:"38px" }} /> */}

        {/* <TextField placeholder="Filter"    style={{ background: '#666699' }} /> */}
      </div>
      <div className="pagination" style={{position:"relative", display:"flex", marginTop:"-165px", marginLeft:"825px"}} >
        {/* <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Pre
        </Button> */}


        <button class="btn btn-warning animation-on-hover" type="button"  onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}  >Pre</button>
        
        {/* <Button onClick={() => handlePageChange(currentPage + 1)}>Next</Button> */}
        <button class="btn btn-info animation-on-hover" type="button"  onClick={() => handlePageChange(currentPage + 1)} >Next</button>

      </div>
      <Footer/>
    </div>
  );
};

export default UserRoles;
