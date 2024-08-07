import React, { useState } from "react";
import AddUserPage from "./AddUserPage";
import { Link } from "react-router-dom";
import Footer from "components/Footer/Footer";



function SystemUsers() {
  const [users, setUsers] = useState([
    // Your initial list of users here
  ]);

  const [isAddUserPageVisible, setIsAddUserPageVisible] = useState(false);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setIsAddUserPageVisible(false);
  };

  
  // Define an initial list of users with Employee ID, First Name, Last Name, User ID, Mobile No, Email, and Role
  const initialUsers = [
    {
      employeeId: "EMP001",
      firstName: "John",
      lastName: "Doe",
      userId: "TS1",
      email: "user1@example.com",
      mobileNo: "123-456-7890",
      role: "Admin"
    },
    {
      employeeId: "EMP002",
      firstName: "Jane",
      lastName: "Smith",
      userId: "TS2",
      email: "user2@example.com",
      mobileNo: "987-654-3210",
      role: "Super Admin"
    },
    {
      employeeId: "EMP003",
      firstName: "James",
      lastName: "Johnson",
      userId: "TS3",
      email: "user3@example.com",
      mobileNo: "555-555-5555",
      role: "Software Engineer"
    },
    {
      employeeId: "EMP004",
      firstName: "Michael",
      lastName: "Brown",
      userId: "TS4",
      email: "user4@example.com",
      mobileNo: "111-222-3333",
      role: "Devops"
    },
    {
      employeeId: "EMP005",
      firstName: "Emily",
      lastName: "Wilson",
      userId: "TS5",
      email: "user5@example.com",
      mobileNo: "999-999-9999",
      role: "Java developer"
    },
    // Add more users as needed
  ];

  // Define the inline CSS for the table
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  return (
    <React.Fragment>

    <div  >








     <Link to="/AddUserPage" > 
      {/* <h2>List of Users</h2> */}
      <button  type="submit" class="btn-fill btn btn-primary" fdprocessedid="mfu63"
        onClick={() => setIsAddUserPageVisible(!isAddUserPageVisible)}
        style={{ float: "right" }}
      >
        Add User
      </button>
     </Link>

       {isAddUserPageVisible ? (
        <AddUserPage addUser={addUser} />
      ) :
      // <table style={tableStyle}>
      //   <thead>
      //     <tr>
      //       <th style={thStyle}>Emp. ID</th>
      //       <th style={thStyle}>First Name</th>
      //       <th style={thStyle}>Last Name</th>
      //       <th style={thStyle}>User ID</th>
      //       <th style={thStyle}>Email</th>
      //       <th style={thStyle}>Mobile No</th>
      //       <th style={thStyle}>Role</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {initialUsers.map((user, index) => (
      //       <tr key={index}>
      //         <td style={tdStyle}>{user.employeeId}</td>
      //         <td style={tdStyle}>{user.firstName}</td>
      //         <td style={tdStyle}>{user.lastName}</td>
      //         <td style={tdStyle}>{user.userId}</td>
      //         <td style={tdStyle}>{user.email}</td>
      //         <td style={tdStyle}>{user.mobileNo}</td>
      //         <td style={tdStyle}>{user.role}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>



      <table class="table">
    <thead>
        <tr>
            <th class="text-center">#</th>
            <th>Name</th>
            <th>Job Position</th>
            <th>Since</th>
            <th class="text-right">Salary</th>
            <th class="text-right">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td>2013</td>
            <td class="text-right">&euro; 99,225</td>
            <td class="td-actions text-right">
                <button type="button" rel="tooltip" class="btn btn-info btn-sm btn-icon">
                    <i class="tim-icons icon-single-02"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-success btn-sm btn-icon">
                    <i class="tim-icons icon-settings"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon">
                    <i class="tim-icons icon-simple-remove"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td class="text-center">2</td>
            <td>John Doe</td>
            <td>Design</td>
            <td>2012</td>
            <td class="text-right">&euro; 89,241</td>
            <td class="td-actions text-right">
              <button type="button" rel="tooltip" class="btn btn-info btn-sm btn-round btn-icon">
                  <i class="tim-icons icon-single-02"></i>
              </button>
              <button type="button" rel="tooltip" class="btn btn-success btn-sm btn-round btn-icon">
                  <i class="tim-icons icon-settings"></i>
              </button>
              <button type="button" rel="tooltip" class="btn btn-danger btn-sm btn-round btn-icon">
                  <i class="tim-icons icon-simple-remove"></i>
              </button>
            </td>
        </tr>
        <tr>
            <td class="text-center">3</td>
            <td>Alex Mike</td>
            <td>Design</td>
            <td>2010</td>
            <td class="text-right">&euro; 92,144</td>
            <td class="td-actions text-right">
                <button type="button" rel="tooltip" class="btn btn-info btn-link btn-icon btn-sm">
                    <i class="tim-icons icon-single-02"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-success btn-link btn-icon btn-sm">
                    <i class="tim-icons icon-settings"></i>
                </button>
                <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-icon btn-sm">
                    <i class="tim-icons icon-simple-remove"></i>
                </button>
            </td>
        </tr>
    </tbody>
</table>
}
    </div>
    <div style={{position:"relative", display:"flex", marginRight:"-125px", marginTop:"450px"}} >

    <Footer style={{ height: "100px" }} />
    </div>
    </React.Fragment>
    
  );
}

export default SystemUsers;
