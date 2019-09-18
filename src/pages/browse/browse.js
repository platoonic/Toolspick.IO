//Basic imports
import React from 'react';
//Child components
import ToolsList from './toolsList';
import FilterBar from './filterBar';

class Browse extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			toolsLoaded: false,
			per_page: 7,
			tools: []
		};
		this.mockRequest = null;
	}

	componentDidMount(){
		//Send API request here instead
		this.mockRequest = setTimeout(() => {
			this.setState({
				toolsLoaded: true,
				tools:[
					{
						id: 0,
						name: 'Express',
						description: 'Web framework for Node.JS',
						stability: 90,
						activity: 80
					},
					{
						id: 1,
						name: 'Flutter',
						description: 'Hybrid Mobile application development framework',
						stability: 80,
						activity: 70
					},
					{
						id: 2,
						name: 'Redis',
						description: 'Caching System and Message broker',
						stability: 90,
						activity: 80
					},
					{
						id: 3,
						name: 'Angular.JS',
						description: 'Frontend web development framework',
						stability: 60,
						activity: 80
					},
					{
						id: 4,
						name: 'Loopback',
						description: 'Backend NodeJS web framework',
						stability: 27,
						activity: 75
					},
					{
						id: 5,
						name: 'Vue.JS',
						description: 'Frontend web development framework',
						stability: 86,
						activity: 50
					},
					{
						id: 6,
						name: 'Tensorflow',
						description: 'Machine learning high-level API library',
						stability: 86,
						activity: 80
					},
					{
						id: 7,
						name: 'Axios',
						description: 'Javascript HTTP requests management library',
						stability: 70,
						activity: 60
					}
				]});
		}, 1000);
	}

	render(){
		//Loading animation div
		const loadingBlocks = <div class="loadingTools">
								<div class="item">
									<div class="title gradient"></div>
									<div class="description gradient"></div>
									<div class="stats gradient"></div>
									<div class="details gradient"></div>
								</div>
								<div class="item">
									<div class="title gradient"></div>
									<div class="description gradient"></div>
									<div class="stats gradient"></div>
									<div class="details gradient"></div>
								</div>
								<div class="item">
									<div class="title gradient"></div>
									<div class="description gradient"></div>
									<div class="stats gradient"></div>
									<div class="details gradient"></div>
								</div>
								<div class="item">
									<div class="title gradient"></div>
									<div class="description gradient"></div>
									<div class="stats gradient"></div>
									<div class="details gradient"></div>
								</div>
								<div class="item">
									<div class="title gradient"></div>
									<div class="description gradient"></div>
									<div class="stats gradient"></div>
									<div class="details gradient"></div>
								</div>
								<div class="item">
									<div class="title gradient"></div>
									<div class="description gradient"></div>
									<div class="stats gradient"></div>
									<div class="details gradient"></div>
								</div>
							  </div>;
		return(
			<div className="row">
				<div className="list">
					<FilterBar />
					{this.state.toolsLoaded === true ? <ToolsList tools={this.state.tools}/> : loadingBlocks}
				</div>
			</div>
		);
	}
}

export default Browse;