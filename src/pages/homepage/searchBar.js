//Basic imports
import React from 'react';
//Child components
import SuggestionsList from './suggestionsList';
//Animations
import {CSSTransitionGroup} from 'react-transition-group';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			suggestionsShown: false,
			searchButtonActive: false,
			query: '',
			suggestions: ['React', 'Redis', 'Retrd']
		}
	}

	handleChange = (e) => {
		this.setState({query: e.target.value});
		if(e.target.value != ''){
			this.setState({suggestionsShown: true, searchButtonActive: false});
		}else{
			this.setState({suggestionsShown: false, searchButtonActive: false});
		}
	}

	fillSearchBar = (value) => {
		this.setState({suggestionsShown: false, searchButtonActive: true, query: value});
	}

	render(){
		return(
			<div className="search">
				<input value={this.state.query} onChange={(e) => {this.handleChange(e)}} type="text" name="search-term" placeholder="start by “Backend framework”, “AR/VR”... or “ReactJS”, “Redis”, “Docker”..."/>
				<button className="btn blue"  disabled={this.state.searchButtonActive === false ? "disabled" : ""}><i className="fa fa-search"></i></button>
				<CSSTransitionGroup transitionName="suggestions" 
									transitionEnterTimeout={400} 
									transitionLeaveTimeout={300}>
				{this.state.suggestionsShown && <SuggestionsList list={this.state.suggestions} fillSearchBar={this.fillSearchBar}/>}
				</CSSTransitionGroup>
			</div>
		);
	}
}

export default SearchBar;