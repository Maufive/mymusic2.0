import React, { Component } from 'react';
import axios from 'axios';
import { Link, navigate } from 'gatsby';
import { Searchform, JumbotronStyles, Searchbutton } from '../styles/JumbotronStyles';
import SearchIcon from '../../assets/search.svg';
import PlayIcon from '../../assets/play-button.svg';

class Jumbotron extends Component {
	state = {
		search: '',
		user: null,
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	searchUser = async e => {
		e.preventDefault();
		await axios
			.get(
				`//ws.audioscrobbler.com//2.0/?method=user.getinfo&user=${this.state.search}&api_key=${
					process.env.GATSBY_API_KEY
				}&format=json`,
			)
			.then(response => {
				const user = response.data.user;
				this.setState({ search: '', user: response.data.user });
				navigate('/overview', {
					state: { user },
				});
			})
			.catch(error => console.log(error));
	};

	render() {
		const { user } = this.state;
		return (
			<JumbotronStyles>
				<div>
					<div>
						<Link to="/">
							<span>
								<PlayIcon /> <h1>mymusic</h1>
							</span>
						</Link>
					</div>
					<Searchform onSubmit={this.searchUser}>
						<div>
							<input
								type="text"
								name="search"
								id="search"
								required
								value={this.state.search}
								onChange={this.handleChange}
								required
							/>
							<label htmlFor="search">Search...</label>
						</div>
						<Searchbutton primary type="submit">
							<SearchIcon />
						</Searchbutton>
					</Searchform>
				</div>
			</JumbotronStyles>
		);
	}
}

export default Jumbotron;
