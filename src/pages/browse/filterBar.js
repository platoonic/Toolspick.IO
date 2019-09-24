//Basic imports
import React from 'react'

class FilterBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			types: [{id: 0, name: 'All'}, 
					{id: 1, name: 'DBMS'},
					{id: 2, name: 'ORM'},
					{id: 3, name: 'Mobile Framework'},
					{id: 4, name: 'Cache management'},
					{id: 5, name: 'Message Broker'}
				   ],
		}
	}
	render(){
		return(
			<div className="tools_bar">
				<div className="select filter">
					<i className="fa fa-chevron-down"></i>
					<select name="Filter" className="select_menu gray" id="filter">
						{this.state.types.map((type) => {
							return(
								<option value={type.id}>{type.name}</option>
							)
						})}
					</select>
				</div>
				<div className="select filter">
					<i className="fa fa-chevron-down"></i>
					<select name="Filter" className="select_menu blue" id="filter">
						<option value="1">Language: All</option>
						<option value="1">C</option>
						<option value="1">C++</option>
						<option value="1">C#</option>
						<option value="1">Python</option>
						<option value="1">PHP</option>
						<option value="1">Ruby</option>
						<option value="1">Java</option>
						<option value="1">Javascript</option>
						<option value="1">R</option>
						<option value="1">Haskel</option>
						<option value="1">Golang</option>
						<option value="1">Rust</option>
						<option value="1">Visual Basic</option>
						<option value="1">Erlang</option>
						<option value="1">Assembly</option>
						<option value="1">Actionscript</option>
						<option value="1">MATLAB</option>
					</select>
				</div>
				<div className="select filter">
					<i className="fa fa-chevron-down"></i>
					<select name="Filter" className="select_menu green" id="filter">
						<option value="1">Stability: All</option>
						<option value="1">High</option>
						<option value="1">Moderate</option>
						<option value="1">Low</option>
					</select>
				</div>
				<div className="select filter">
					<i className="fa fa-chevron-down"></i>
					<select name="Filter" className="select_menu orange" id="filter">
						<option value="1">Dependencies: All</option>
						<option value="1">None</option>
						<option value="1">Low</option>
						<option value="1">Moderate</option>
						<option value="1">High</option>
					</select>
				</div>
				<div className="search">
					<input type="text" name="search-text" placeholder="Search" />
					<a href="#"><i className="fa fa-search"></i></a>
				</div>
			</div>
		)
	}
}

export default FilterBar