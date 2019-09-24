//Basic imports
import React from 'react'
//Child components
import ToolsBar from '../browse/toolsBar'
import {Line, Bar} from 'react-chartjs-2'

class View extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			loadingData:true,
			toolData:{
				name: 'Express',
				description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
				stability: 30,
				activity: 90,
				dependencies: 2,
				sofQuestions: 5123,
				githubStars: 12321,
				githubContributors: 92,
				usedBy: 22132
			}
		}
		this.charts = {
			stackoverflowData: {
			    labels: [2015,2016,2017,2018,2019],
			    datasets: [{
			        data: [1000,1500,1300,2100,1000,1200,300,221,783,2478],
			        borderColor: "#e9ae8b",
			        backgroundColor: "#f8c9ac",
			        fill: true
			    }]
		  	},
		  	googletrendsData:{
		  		labels: [2015,2016,2017,2018,2019],
			    datasets: [{ 
			        data: [7,8,10,9,14,16,18,17,18,14,15,19,20,21,22],
			        borderColor: "#77aae5",
			        backgroundColor: "#94c0f3",
			        fill: true
			    }]
		  	},
		  	versionsData:{
		  		labels: [2015,2016,2017,2018,2019],
			    datasets: [{ 
			        data: [13,15,13,17,14,16,14,15,13,15,16,14,15,16,12,14,13,15,16,15,14,15,15],
			        borderColor: "#9fb8be",
			        backgroundColor: "#9fb8be",
			        fill: true
			    }]
		  	},
		  	options: {
				title: {
				  display: true,
				  padding: 35,
				  fontColor: "#828282"
				},
				legend: {
					display: false,
				},
				scales: {
					xAxes: [{
						barThickness: 13,
						gridLines: {
							color: "#FFFFFF"
						},
						ticks: {
							fontColor: "#d8d8d8"
						}
					}],
					yAxes: [{
						gridLines: {
							color: "#f6f6f6"
						},
						ticks: {
							fontColor: "#d8d8d8"
						}
					}]
				}
			}
		}
		this.loading = null;
		//Stackoverflow options object
		this.sofOptions = JSON.parse(JSON.stringify(this.charts.options));
		this.sofOptions.title.text = "Number of Stackoverflow questions";
		//Google Trends options object
		this.googleTrendsOptions = JSON.parse(JSON.stringify(this.charts.options));
		this.googleTrendsOptions.title.text = "Google Trends Popularity";
		//Versions frequency object
		this.frequencyOptions = JSON.parse(JSON.stringify(this.charts.options));
		this.frequencyOptions.title.text = "Versions Frequency";
	}

	componentDidMount(){
		this.loading = setTimeout(() => {this.setState({ loading: false })}, 1000);
	}

	render(){
		const loadingBlocks = <div className="row">
								<div className="list single loading">
							  		<ToolsBar page="view"/>
							  		<div className="loadingTool">
							  			<div className="column4">
							  				<div className="gradient data"></div>
							  				<div className="gradient data"></div>
							  			</div>
							  			<div className="column4">
							  				<div className="gradient data"></div>
							  				<div className="gradient data"></div>
							  			</div>
							  			<div className="column4">
							  				<div className="gradient data"></div>
							  			</div>
							  		</div>
							  	</div>
							  </div>;
		if(this.state.loading === false){
			let tool = this.state.toolData;
			return(
				<div className="row">
					<div className="list single">
						<ToolsBar page="view"/>
						<div className="items single">
							<div className="row"> 
								<div className="column4">
									<div className="data">
										<h2>{tool.name}</h2>
										<div className="description">
											<span className="description">{tool.description}</span>
										</div>
										<div className="stats">
											<div className="stat">
												<span className="title">Stability: </span>
												<div className="meter">
													<span className="low" style={{width:"30%"}}></span>
												</div>
											</div>
											<div className="stat">
												<span className="title">Activity:  </span>
												<div className="meter">
													<span className="high" style={{width:"90%"}}></span>
												</div>
											</div>
										</div>
										<div className="metrics">
											<div className="metric">
												<i className="fa fa-archive"></i>
												<span>Dependencies: <span className="bold">{tool.dependencies}</span></span>
											</div>
											<div className="metric">
												<i className="fa fa-question-circle"></i>
												<span>Stackoverflow Questions (2019): <span className="bold">{tool.sofQuestions}</span></span>
											</div>
											<div className="metric">
												<i className="fa fa-star"></i>
												<span>Github stars: <span className="bold">{tool.githubStars}</span></span>
											</div>
											<div className="metric">
												<i className="fa fa-users"></i>
												<span>Github contributors: <span className="bold">{tool.githubContributors}</span></span>
											</div>
											<div className="metric">
												<i className="fa fa-cubes"></i>
												<span>Used by: <span className="bold">{tool.usedBy} repository</span></span>
											</div>
										</div>
									</div>
								</div>
								<div className="column4">
									<Line width={300} height={220} data={this.charts.stackoverflowData} options={this.sofOptions}/>
									<Bar width={300} height={220} data={this.charts.versionsData} options={this.frequencyOptions}/>
								</div>
								<div className="column4">
									<Line width={300} height={220} data={this.charts.googletrendsData} options={this.googleTrendsOptions}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}else{
			return(loadingBlocks);
		}
	}
}

export default View