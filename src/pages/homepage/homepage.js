import React from "react";
import HeaderVector from '../../imgs/header-vector.png';

class Homepage extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="column7">
					<div className="cta">
						<h1 data-aos="fade-up">
							Choose the right tool for your next <span className="red">creative</span> project.
						</h1>
						<p data-aos="fade-up">
							Toolspick is an open-source analysis tool that helps web developers choose the right framework / library / dependency to use in their projects by giving them detailed statistics that help shape their decision. 
						</p>
						<div className="search" data-aos="fade-right">
							<input type="text" name="search-term" placeholder="start by “Backend framework”, “AR/VR”... or “ReactJS”, “Redis”, “Docker”..." />
							<button className="btn blue"><i className="fa fa-search"></i></button>
						</div>
						<div className="browse" data-aos="fade-right">
							<span>or</span>
							<button onclick="location.href='file:///Users/apple/Desktop/Toolspick/HTML/browse.html';" className="btn green">Browse</button>
						</div>
						<div className="links">
							<ul>
								<li><a href="http://www.github.com">CHECK ON GITHUB</a></li>
								<li><a href="http://www.github.com">CONTRIBUTE</a></li>
								<li><a href="http://www.paypal.com">DONATE</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="column5">
					<img src={HeaderVector} alt="" />
				</div>
			</div>
		);
	}
}

export default Homepage;