import React, {Component } from 'react';

class Carosel extends Component {
    render() { 
        return (
            <>
            <div className="container-fluid">
	<div className="row">
		<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src="office copy/office1.jpg" alt="office"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
    <div className="item">
      <img src="office copy/office2.jpg" alt="office"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
   <div className="item">
      <img src="office copy/office3.jpg" alt="office"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
   ...
  </div>

  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
		
	</div>
	
</div>
            </>
        );
    }
}
 
export default Carosel;