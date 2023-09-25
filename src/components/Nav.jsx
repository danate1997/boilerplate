import React from "react";
import {Link} from "react-router-dom";

function Nav(){
   return (
    <div id="nav-container">
       <nav>
           <Link to={"/home"} className="nav-link">Home</Link>
           <Link to={"/biography"} className="nav-link">Biography</Link>
           <Link to={"/statistics"} className="nav-link">Statistics</Link>
       </nav>
    </div>
   )
}

export default Nav;