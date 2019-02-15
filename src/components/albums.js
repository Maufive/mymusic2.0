import React, { Component } from 'react';
import axios from 'axios';
import { PeriodNavigation } from '../components/PeriodNavigation';
import { SongStyles, Songlist } from '../styles/SongsStyles';
import { Button } from '../styles/Button';
import PlayIcon from '../../assets/play.svg';

class Albums extends Component {
	state = {
		albums: null,
		period: '7day',
		limit: '20',
		loading: false,
		page: 1,
	};

	componentDidMount() {
		this.getAlbums();
	}

	getAlbums = async () => {
		const username = this.props.user.name;
		const { period, limit, page } = this.state;
		await this.setState({ loading: true });
		await axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${
					process.env.GATSBY_API_KEY
				}&limit=${limit}&page=${page}&period=${period}&format=json`,
			)
			.then(response => {
				let oldstate;
				if (this.state.albums) {
					oldstate = [...this.state.albums];
					oldstate.push(...response.data.topalbums.album);
				}
				this.setState({
					albums: oldstate || response.data.topalbums.album,
					page: page + 1,
					loading: false,
				});
			})
			.catch(error => console.log(error));
	};

	handleChange = async e => {
		e.preventDefault();
		const period = e.target.getAttribute('value');
		await this.setState({ period, albums: null, page: 1 });
		this.getAlbums();
	};

	render() {
		const { albums } = this.state;
		return (
			<SongStyles>
				<PeriodNavigation location={this.state.period} handleChange={this.handleChange} />
				<div>
					{albums && (
						<Songlist>
							{albums.map(album => (
								<li key={album.name}>
									<a href={album.url} target="_blank" rel="noopener noreferrer">
										<div>
											<p>{album.name}</p>
											<span>
												<PlayIcon /> {album.playcount}
											</span>
										</div>
									</a>
								</li>
							))}
							<Button primary onClick={() => this.getAlbums()}>
								Show more
							</Button>
						</Songlist>
					)}
				</div>
			</SongStyles>
		);
	}
}

export default Albums;
