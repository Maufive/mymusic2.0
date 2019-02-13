import React, { Component } from 'react';

class Jumbotron extends Component {
	state = {
		user: null,
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	searchUser = e => {
		e.preventDefault();
	};

	render() {
		const { user } = this.state;
		return (
			<div
				style={{
					border: '2px solid red',
					height: '100px',
					marginBottom: '5rem',
				}}
			>
				<form onSubmit={this.searchUser}>
					<div>
						<input
							type="text"
							name="search"
							id="search"
							required
							value={user}
							onChange={this.handleChange}
						/>
						<label htmlFor="search">Search LastFM Username</label>
					</div>
				</form>
				<p>{user}</p>
			</div>
		);
	}
}

export default Jumbotron;
