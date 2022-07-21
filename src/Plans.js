import React, { Component } from 'react';

class Plans extends Component {
    render() { 
        return (
            <>
    <div className="container">
	<div className="row sk">
		<h3 className="text-center">{this.props.text}</h3>

		<div className="col-md-3">
    <div className="thumbnail">
      <img src="office copy/office5.jpg" alt="office" className="img-responsive" style={{height: "175px", width: "100%;"}}/>
      <div className="caption">
        <h3>COUSTOMISED OFFICES</h3>
        <p>Our customised offices offer a great location for your business 
            and you office to suit your preferences.Also, you become a member of our community with
            benefits such as access to our meeting rooms. </p>
        
      </div>
    </div>
	</div>

	<div className="col-md-3">
    <div className="thumbnail bts">
      <img src="office copy/office4.jpg" alt="office" className="img-responsive" style={{height: "200px", width: "100%;"}} />
      <div className="caption">
        <h3>VIRTUAL OFFICES</h3>
        <p>Our virtual offices allow your business to get our location 
              address, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms. </p>
        
      </div>
    </div>
	</div>

	<div className="col-md-3">
    <div className="thumbnail">
      <img src="office copy/office6.jpg" alt="office" className="img-responsive" style={{height: "165px", width: "100%;"}}/>
      <div className="caption">
        <h3>SERVICED OFFICES</h3>
        <p>Our serviced offices offer a great location for your business and we provide services such as internet,utilities and others from our partners. Also you become a memeber of our community with benefits such as access to our meeting rooms.</p>
        
      </div>
    </div>
	</div>

	<div className="col-md-3">
    <div className="thumbnail">
      <img src="office copy/office7.jpg" alt="office" className="img-responsive" style={{height: "165px", width: "100%;"}}/>
      <div className="caption">
        <h3>MEETING ROOMS</h3>
        <p>Our meeting rooms offer a great location for your meeting with your clients or business partners We provide presentations equipments and coffee. Also you become a member of our community with benefits such as access to our meeting rooms.</p>
        
      </div>
    </div>
</div>

</div>

</div>
            </>
        );
    }
}
 
export default Plans;