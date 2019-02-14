import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import SEO from '../components/seo';
import { PeriodNavigation } from '../components/PeriodNavigation';
import { SongStyles, Songlist } from '../styles/SongsStyles';
import { Button } from '../styles/Button';
import PlayIcon from '../../assets/play.svg';

const user = 'tjenalaeget';

class ArtistsPage extends Component {
	state = {
		songs: null,
		period: '7day',
		limit: '20',
		loading: false,
		page: 1,
	};

	componentDidMount() {
		this.getArtists();
	}

	getArtists = async () => {
		const { period, limit, page } = this.state;
		await this.setState({ loading: true });
		await axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${user}&api_key=${
					process.env.GATSBY_API_KEY
				}&limit=${limit}&page=${page}&period=${period}&format=json`,
			)
			.then(response => {
				let oldstate;
				if (this.state.artists) {
					oldstate = [...this.state.artists];
					oldstate.push(...response.data.toptracks.track);
				}
				this.setState({
					artists: oldstate || response.data.topartists.artist,
					page: page + 1,
					loading: false,
				});
			})
			.catch(error => console.log(error));
	};

	handleChange = async e => {
		e.preventDefault();
		const period = e.target.getAttribute('value');
		await this.setState({ period, artists: null, page: 1 });
		this.getArtists();
	};

	render() {
		const { artists } = this.state;
		return (
			<Layout>
				<SEO title="Artists" keywords={['artists', ' annat', 'mer keywords']} />
				<UserLayout location={this.props.location}>
					<SongStyles>
						<PeriodNavigation location={this.state.period} handleChange={this.handleChange} />
						<div>
							{artists && (
								<Songlist>
									{artists.map(artist => (
										<li key={artist.name}>
											<a href={artist.url} target="_blank" rel="noopener noreferrer">
												<div>
													<p>{artist.name}</p>
													<span>
														<PlayIcon /> {artist.playcount}
													</span>
												</div>
											</a>
										</li>
									))}
									<Button primary onClick={() => this.getArtists()}>
										Show more
									</Button>
								</Songlist>
							)}
						</div>
					</SongStyles>
				</UserLayout>
			</Layout>
		);
	}
}

export default ArtistsPage;
