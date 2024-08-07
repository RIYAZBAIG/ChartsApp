import React from "react";
import Sidebar from "components/Sidebar/Sidebar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer";
import routes from "routes.js";
import logo from "assets/img/react-logo.png";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import { useEffect , useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function EditUser() {
  const [editUser, setEditUser] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    userId: "",
    email: "",
    mobileNo: "",
    role: "",
    reportingManager: "",
    products: "",
    location: "",
    recordVisibility: "",
    Level: "",
    Proficiency: "",
    Committee: "",
    CADLimit: "",
    MobileUUID: "",
    Remarks: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
  };

  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setSidebarOpened(!sidebarOpened);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://dev.vizart.traversetec.co/api/v1/user/edit/5"
      );
      const userData = response.data; // Assuming the API response is JSON with user data
      setEditUser(userData); // Update the editUser state with the fetched data
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle errors here, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount


  return (
    


<BackgroundColorContext.Consumer  >
{({ color, changeColor }) => (
  
  <React.Fragment>
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
        <div className="content mainContentDiv"  >
         
<div class="card"  >
  <div class="card-body">
  <form   >
  <div class="form-row">
    <div class="form-group col-md-6">
      
      <label for="employeeId">Employee ID</label>
      <input type="text" class="form-control" id="employeeId" placeholder="Employee ID"/>
    </div>
    <div class="form-group col-md-6">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="First Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" placeholder="Last Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="userId">User ID</label>
      <input type="text" class="form-control" id="userId" placeholder="User ID"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
  
      <div class="form-group col-md-6">
      <label for="userId">Reporting Manager</label>
      <input type="text" class="form-control" id="userId" placeholder="Reporting Manager"/>
    </div>
    <div class="form-group col-md-6">
      <label for="userId">Products</label>
      <input type="text" class="form-control" id="userId" placeholder="Ex.Products"/>
    </div>
    <div class="form-group col-md-6">
      <label for="userId">Location</label>
      
      <input type="text" class="form-control" id="userId" placeholder="Location"/>
      
    </div>
    <div class="form-group col-md-6">
      <label for="userId">Record Visibility</label>
      
      <input type="text" class="form-control" id="userId" placeholder="Record Visibility"/>
      
    </div>

    <div class="form-group col-md-6">
      <label for="userId">Lavel</label>
      
      <input type="text" class="form-control" id="userId" placeholder="Lavel"/>
      
    </div>
    <div class="form-group col-md-6">
      <label for="userId">Proficiency</label>
      
      <input type="text" class="form-control" id="userId" placeholder="Proficiency"/>
      
    </div>
    <div class="form-group col-md-6">
      <label for="userId">Committee</label>
      
      <input type="text" class="form-control" id="userId" placeholder="Committee"/>
      
    </div>
    <div class="form-group col-md-6">
      <label for="userId">CAD Limit</label>
      
      <input type="text" class="form-control" id="userId" placeholder="CAD Limit"/>
      
    </div>
    <div class="form-group col-md-6" >
        <label for="inputAddress">Mobile UUID</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Mobile UUID"/>
        
      </div>
    <div class="form-group col-md-6" >
        <label for="inputAddress">Mobile No</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="+91"/>
        
      </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  
  
  <div class="form-group">
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" value=""/>
        Check me out
        <span class="form-check-sign">
          <span class="check"></span>
        </span>
      </label>
    </div>
  </div>
  <button type="button"  onClick={()=>editUser()} class="btn btn-primary">Submit</button>
  <button type="button" onClick={()=>editUser()}  class="btn btn-success" style={{margin:'25px', marginLeft:"890px"}} >Cancel</button>

  
</form>

  </div>
</div>
        </div>
      </div>
      

<Footer/>
    
      </div>

  </React.Fragment>
)}
</BackgroundColorContext.Consumer>


  );

}

export default EditUser;
