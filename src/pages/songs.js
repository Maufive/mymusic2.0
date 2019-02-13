import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../layout/index';
import SEO from '../components/seo';
import { PeriodNavigation } from '../components/PeriodNavigation';
import { SongStyles, Songlist } from '../styles/SongsStyles';
import { Button } from '../styles/Button';
import PlayIcon from '../../assets/play.svg';

const user = 'tjenalaeget';

class SongsPage extends Component {
	state = {
		songs: null,
		period: '7day',
		limit: '20',
		loading: false,
		page: 1,
	};

	componentDidMount() {
		this.getSongs();
	}

	getSongs = async () => {
		const { period, limit, page } = this.state;
		await this.setState({ loading: true });
		await axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${
					process.env.GATSBY_API_KEY
				}&limit=${limit}&page=${page}&period=${period}&format=json`,
			)
			.then(response => {
				let oldstate;
				if (this.state.songs) {
					oldstate = [...this.state.songs];
					oldstate.push(...response.data.toptracks.track);
				}
				this.setState({
					songs: oldstate || response.data.toptracks.track,
					page: page + 1,
					loading: false,
				});
			})
			.catch(error => console.log(error));
	};

	handleChange = async e => {
		e.preventDefault();
		const period = e.target.getAttribute('value');
		await this.setState({ period, songs: null, page: 1 });
		this.getSongs();
	};

	render() {
		const { songs } = this.state;
		return (
			<Layout location={this.props.location}>
				<SEO title="Songs" keywords={['songs', 'nåt annat', 'mer keywords']} />
				<SongStyles>
					<PeriodNavigation location={this.state.period} handleChange={this.handleChange} />
					<div>
						{songs && (
							<Songlist>
								{songs.map(song => (
									<li key={song.name}>
										<a href={song.url} target="_blank" rel="noopener noreferrer">
											<div>
												<p>
													{song.artist.name} - {song.name}
												</p>
												<span>
													<PlayIcon /> {song.playcount}
												</span>
											</div>
										</a>
									</li>
								))}
								<Button primary onClick={() => this.getSongs()}>
									Show more
								</Button>
							</Songlist>
						)}
					</div>
				</SongStyles>
			</Layout>
		);
	}
}

export default SongsPage;
