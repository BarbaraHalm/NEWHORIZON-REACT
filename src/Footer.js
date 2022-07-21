import React from 'react';

function Footer(props) {
    return (  
        <>
    <div className="container-fluid">
	<div className="footer">
		<div className="row">
		 <div className="col-md-12"> 

            <div className="col-md-4">
                <h4>{props.place}</h4>
                <h6>Accra,Ghana</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quo enim nihil, facere veniam iste</p>
            </div>

            <div className="col-md-4">
                <h4>{props.contact}</h4>
                <p>+233 24 309 1986<img src="office copy/ghana.png" className= "icon1"/></p>
    	        <p>+1 570 870 1234<img src="office copy/united-states.png" className="icon1"/></p>
    	        <p>+82 424 678 9975 <img src="office copy/south-korea.png" className="icon1"/>
                </p>
            </div>

            <div className="col-md-4">
                <h4>{props.social}</h4>
                <p>www.restore.org</p>
            </div>

        </div>
        </div>
    </div>   
    </div>

        </>
    );
}

export default Footer;