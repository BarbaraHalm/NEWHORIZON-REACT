import React from 'react';

function Header() {
    return (  
        <>
        <nav className="navbar1">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">{props.title}</a>
    </div>
    <div className="icon">
    	<img src="office copy/ghana.png" className= "icon1"/>
    	<img src="office copy/united-states.png" className="icon1"/>
    	<img src="office copy/south-korea.png" className="icon1"/>
    	
    </div>
     <div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">ABOUT US</a></li>
          </ul>
    </div>
  </div>
</nav>

        </>
    );
}

export default Header;