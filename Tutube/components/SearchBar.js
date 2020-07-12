import React from 'react';

class SearchBar extends React.Component{

	state = { input:''};

	onInputChange = (event) =>{
		this.setState({input: event.target.value});
	}

	onFormSubmit = event =>{
		event.preventDefault(); // To prevent auto submit of the form
		if (this.state.input === ''){
			alert("Hello\nEnter some query!");
		}
		else{
			this.props.onFormSubmit(this.state.input);
		}
		// Make sure we callback from parent compo
	}
	render(){
		return(
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<input
						type="text"
						value={this.state.input} 
						onChange={this.onInputChange}	
						/>
						<button onClick={this.onFormSubmit} type="submit">search</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;