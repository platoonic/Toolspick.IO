//Basic imports
import React from "react"
import {Link} from 'react-router-dom'
//Child components
import SearchBar from './searchBar'
//Images
import HeaderVector from '../../imgs/header-vector.png'

class Homepage extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="column7">
					<div className="cta">
						<h1>
							Choose the right tool for your next <span className="red">creative</span> project.
						</h1>
						<p>
							Toolspick is an open-source analysis tool that helps web developers choose the right framework / library / dependency to use in their projects by giving them detailed statistics that help shape their decision. 
						</p>
						<SearchBar />
						<div className="browse">
							<span>or</span>
							<Link to="/browse/all" className="btn green">Browse</Link>
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
		)
	}
}

export default Homepage