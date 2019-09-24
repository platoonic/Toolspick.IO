//Basic imports
import React from 'react'

class View extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="list single">
					<div className="tools_bar">
						<div className="back">
							<button className="btn back">Back to listings<i className="fa fa-chevron-left"></i></button>
						</div>
					</div>
					<div className="items single">
						<div className="row" data-aos="fade-up"> 
							<div className="column4">
								<div className="data">
									<h4>Express</h4>
									<div className="description">
										<span className="description">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</span>
									</div>
									<div className="stats">
										<div className="stat">
											<span className="title">Stability: </span>
											<div className="meter">
												<span class="low" style={{width:"30%"}}></span>
											</div>
										</div>
										<div className="stat">
											<span className="title">Activity:  </span>
											<div className="meter">
												<span class="high" style={{width:"90%"}}></span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="column4">
								<canvas id="stackoverflow" width="300" height="220"></canvas>
							</div>
							<div className="column4">
								<canvas id="googleTrends" width="300" height="220"></canvas>
							</div>
							<div className="column12">
								<div className="metrics">
									<div className="metric">
										<i className="fa fa-archive"></i>
										<span>Dependencies: <span className="bold">2</span></span>
									</div>
									<div className="metric">
										<i className="fa fa-question-circle"></i>
										<span>Stackoverflow Questions (2019): <span className="bold">5123</span></span>
									</div>
									<div className="metric">
										<i className="fa fa-star"></i>
										<span>Github stars: <span className="bold">12,312</span></span>
									</div>
									<div className="metric">
										<i className="fa fa-users"></i>
										<span>Github contributors: <span className="bold">192</span></span>
									</div>
									<div className="metric">
										<i className="fa fa-cubes"></i>
										<span>Used by: <span className="bold">2,123 repository</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default View