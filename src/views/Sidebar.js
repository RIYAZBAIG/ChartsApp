import React from "react";
import { Link } from "react-router-dom";
import { Grid,Card,CardContent } from "@mui/material";

const Sidebar = () => {
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li class="nav-item mb-2 mt-3">
          <a class="nav-link text-secondary" href="#">
            <h5>TraverseTechLab</h5>
          </a>
        </li>
        <li class="nav-item mb-2">
          <ul
            class="list-unstyled flex-column pl-3 collapse"
            id="submenu1"
            aria-expanded="false"
          >
            <li class="nav-item mb-2 ">
              <a class="nav-link text-secondary" href="">
                <i class="fas fa-book-reader"></i> Data Report{" "}
              </a>
            </li>
            <li class="nav-item mb-2 ">
              <a class="nav-link text-secondary" href="">
                {" "}
                <i class="fas fa-book-medical"></i> File Report{" "}
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="fas fa-file-export font-weight-bold"></i>
            {/* <span className="ml-3">Load Your Data</span> */}
         <button>1.Load your data</button>


          </a>
        </li>
       
        <div>
          
        <Grid item xs={2}>
            <Card>
              <CardContent>
              <Link to="/choose">2. ChooseChart</Link>

              </CardContent>
            </Card>
          </Grid>
          </div>

        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="fas fa-file-export font-weight-bold"></i>
            <span className="ml-3">Export</span>
          </a>
        </li>
        
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="fas fa-tablet-alt font-weight-bold"></i>
            <span className="ml-3">Snippets</span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="far fa-folder font-weight-bold"></i>{" "}
            <span className="ml-3">Layouts</span>
          </a>
        </li>
          
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            Templates
          </a>
          
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            Themes
          </a>
        </li>
        
        <div className="btndiv" >
          
    <Link to="/Pie">  <Button style={{position:"relative", display:"flex", marginRight:"10px"}}  >PieChart</Button> </Link>
    <Link to="/Bar">  <Button style={{position:"relative", display:"flex", marginRight:"10px"}} >BarChart</Button> </Link>
    <Link to="/Line">  <Button style={{position:"relative", display:"flex", marginRight:"10px"}}>LineChart</Button> </Link>
   <Link to ="Bubble"> <button type="button" class="btn btn-success" style={{position:"relative", display:"flex", marginRight:"10px"}} >BubbleChart</button> </Link>
   <Link to ="Staked"> <button type="button" class="btn btn-success"style={{position:"relative", display:"flex", marginRight:"10px"}} >StackedBarChart</button> </Link>
   <Link to ="BumpChart"> <button type="button" class="btn btn-success" style={{position:"relative", display:"flex", marginRight:"10px"}} >BumpChart</button> </Link>

    </div>
    
      </ul>
    </div>
  );
};

export default Sidebar;
