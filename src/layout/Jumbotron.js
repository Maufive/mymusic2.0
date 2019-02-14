import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
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
			.then(response => this.setState({ user: response.data, search: '' }))
			.catch(error => console.log(error));
	};

	formatDate = unix => {
		const timestamp = unix;
		// Months array
		const months_arr = [
			'jan',
			'feb',
			'mar',
			'apr',
			'may',
			'jun',
			'jul',
			'aug',
			'sep',
			'oct',
			'nov',
			'dec',
		];
		const date = new Date(timestamp * 1000);
		const year = date.getFullYear();
		const month = months_arr[date.getMonth()];
		const day = date.getDate();
		const convdataTime = month + ' ' + day + ' ' + year;
		return convdataTime;
	};

	render() {
		const { user } = this.state;
		return (
			<JumbotronStyles>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '3rem 0',
					}}
				>
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
				{user && (
					<div>
						<h3 style={{ borderBottom: '2px solid #1EB97F' }}>User: {user.user.name}</h3>
						<h3 style={{ borderBottom: '2px solid #1EB97F' }}>
							Total playcount: {user.user.playcount}
						</h3>
						<h3 style={{ borderBottom: '2px solid #1EB97F' }}>
							Member since: {this.formatDate(user.user.registered.unixtime)}
						</h3>
					</div>
				)}
			</JumbotronStyles>
		);
	}
}

export default Jumbotron;
