//Basic imports
import React from 'react'
//Child components
import SuggestionsList from './suggestionsList'
//Animations
import {CSSTransitionGroup} from 'react-transition-group'
//Axios API
import API from '../../utilities/api'

class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			suggestionsShown: false,
			searchButtonActive: false,
			query: '',
			suggestions: []
		}
	}

	handleChange = (e) => {
		this.setState({query: e.target.value})
		if(e.target.value != '' && e.target.value.length > 2){
			this.getSuggestionsFromGithub(e.target.value)
			this.setState({suggestionsShown: true, searchButtonActive: false})
		}else{
			this.setState({suggestionsShown: false, searchButtonActive: false})
		}
	}

	//Search for repositories names using Github API
	getSuggestionsFromGithub(query){
		API.get(`https://api.github.com/search/repositories?q=${query}&per_page=5&page=1&sort=stars`).then((res) =>{
			const suggestions = res.data.items.map((item) => {
				return item.name
			})
			this.setState({suggestions})
		})
	}

	fillSearchBar = (value) => {
		this.setState({suggestionsShown: false, searchButtonActive: true, query: value})
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
		)
	}
}

export default SearchBar