//Basic imports
import React from 'react'
import {Link} from 'react-router-dom'

const ToolsList = (props) => {
	return(
		<div className="items">
			{props.tools.map((tool) => {
				//Custom CSS based on level for stability & activity progress bars
				let stabilityLevel
				let activityLevel
				if(tool.stability > 70){
					stabilityLevel = "high"
				}else if(tool.stability > 30){
					stabilityLevel = "moderate"
				}else{
					stabilityLevel = "low"
				}
				if(tool.activity > 70){
					activityLevel = "high"
				}else if(tool.activity > 30){
					activityLevel = "moderate"
				}else{
					activityLevel = "low"
				}
				return(
					<div className="row">
						<div className="item">
							<div className="column2">
								<div className="title">
									<h4>{tool.name}</h4>
								</div>
							</div>
							<div className="column4">
								<div className="description">
									<span>{tool.description}</span>
								</div>
							</div>
							<div className="column4">
								<div className="stats">
									<span className="title">Stability: </span>
									<div className="meter">
										<span className={stabilityLevel} style={{width:tool.stability+"%"}}></span>
									</div>
									<span className="title">Activity: </span>
									<div className="meter">
										<span className={activityLevel} style={{width:tool.activity+"%"}}></span>
									</div>
								</div>
							</div>
							<div className="column2">
								<div className="details">
									<Link to="/view/15">Details</Link>
									<a href="http://www.github.com">Github</a>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ToolsList