//Basic imports
import React from 'react'

const SuggestionsList = (props) => {
	return(
		<div key={0} className="suggestions">
			<ul>
				{props.list.map((item, index) => {
					return(<li key={index}><a href="#" onClick={() => {props.fillSearchBar(item)}}>{item}</a></li>)
				})}
			</ul>
		</div>
	)
}

export default SuggestionsList