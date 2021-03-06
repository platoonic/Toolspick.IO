//Basic imports
import React from 'react'
//Child components
import ToolsList from './toolsList'
import ToolsBar from './toolsBar'

class Browse extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			toolsLoaded: false,
			per_page: 7,
			tools: []
		}
		this.mockRequest = null
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
						activity: 80,
						type: 'Backend Framework'
					},
					{
						id: 1,
						name: 'Flutter',
						description: 'Hybrid Mobile application development framework',
						stability: 80,
						activity: 70,
						type: 'Mobile development Framework'
					},
					{
						id: 2,
						name: 'Redis',
						description: 'Caching System and Message broker',
						stability: 90,
						activity: 80,
						type: 'Caching Library'
					},
					{
						id: 3,
						name: 'Angular.JS',
						description: 'Frontend web development framework',
						stability: 60,
						activity: 80,
						type: 'Frontend Framework'
					},
					{
						id: 4,
						name: 'Loopback',
						description: 'Backend NodeJS web framework',
						stability: 27,
						activity: 75,
						type: 'Backend Framework'
					},
					{
						id: 5,
						name: 'Vue.JS',
						description: 'Frontend web development framework',
						stability: 86,
						activity: 50,
						type: 'Frontend Framework'
					},
					{
						id: 6,
						name: 'Tensorflow',
						description: 'Machine learning high-level API library',
						stability: 86,
						activity: 80,
						type: 'Machine Learning Library'
					},
					{
						id: 7,
						name: 'Axios',
						description: 'Javascript HTTP requests management library',
						stability: 70,
						activity: 60,
						type: 'JS Library'
					},
					{
						id: 8,
						name: 'Docker',
						description: 'Deployment system that utilizes virtual containers',
						stability: 80,
						activity: 67,
						type: 'Deployment tool'
					},
					{
						id: 9,
						name: 'GraphQL',
						description: 'Advanced API library more advanced than REST',
						stability: 80,
						activity: 70,
						type: 'API'
					},
					{
						id: 10,
						name: 'React Native',
						description: 'Hybrid mobile development framework',
						stability: 80,
						activity: 80,
						type: 'Mobile development framework'
					}
				]})
		}, 1000)
	}

	render(){
		//Loading animation div
		const loadingBlocks = <div className="loadingTools">
								<div className="item">
									<div className="title gradient"></div>
									<div className="description gradient"></div>
									<div className="stats gradient"></div>
									<div className="details gradient"></div>
								</div>
								<div className="item">
									<div className="title gradient"></div>
									<div className="description gradient"></div>
									<div className="stats gradient"></div>
									<div className="details gradient"></div>
								</div>
								<div className="item">
									<div className="title gradient"></div>
									<div className="description gradient"></div>
									<div className="stats gradient"></div>
									<div className="details gradient"></div>
								</div>
								<div className="item">
									<div className="title gradient"></div>
									<div className="description gradient"></div>
									<div className="stats gradient"></div>
									<div className="details gradient"></div>
								</div>
								<div className="item">
									<div className="title gradient"></div>
									<div className="description gradient"></div>
									<div className="stats gradient"></div>
									<div className="details gradient"></div>
								</div>
								<div className="item">
									<div className="title gradient"></div>
									<div className="description gradient"></div>
									<div className="stats gradient"></div>
									<div className="details gradient"></div>
								</div>
							  </div>
		return(
			<div className="row">
				<div className="list">
					<ToolsBar page="browse"/>
					{this.state.toolsLoaded === true ? <ToolsList tools={this.state.tools}/> : loadingBlocks}
				</div>
			</div>
		)
	}
}

export default Browse