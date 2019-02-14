import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../layout/index';
import UserLayout from '../layout/User';
import { OverviewStyles, Container, Divider } from '../styles/OverviewStyles';
import TopFive from '../components/TopFiveBlock';
import AlbumsOverview from '../components/AlbumsOverview';
import SEO from '../components/seo';

const user = 'tjenalaeget';

class OverviewPage extends Component {
	state = {
		songs: null,
		artists: null,
		albums: null,
		loaded: false,
	};

	componentDidMount() {
		this.getData();
	}

	getSongs = () => {
		axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${
					process.env.GATSBY_API_KEY
				}&limit=5&period=overall&format=json`,
			)
			.then(response => this.setState({ songs: response.data.toptracks.track }))
			.catch(error => console.log(error));
	};

	getArtists = () => {
		axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${user}&api_key=${
					process.env.GATSBY_API_KEY
				}&period=overall&limit=5&format=json`,
			)
			.then(response => this.setState({ artists: response.data.topartists.artist }));
	};

	getAlbums = () => {
		axios
			.get(
				`//ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${user}&api_key=${
					process.env.GATSBY_API_KEY
				}&period=overall&limit=5&format=json`,
			)
			.then(response => this.setState({ albums: response.data.topalbums.album, loaded: true }));
	};

	getData = async () => {
		await this.getSongs();
		await this.getArtists();
		await this.getAlbums();
	};

	render() {
		const { songs, artists, albums } = this.state;
		return (
			<Layout>
				<SEO title="Hem" keywords={['gatsby', 'application', 'react']} />

				<UserLayout location={this.props.location}>
					<OverviewStyles>
						<Container>
							{songs && <TopFive data={songs} title={'Top 5 Songs'} />}
							{songs && artists && <Divider />}
							{artists && <TopFive data={artists} title={'Top 5 Artists'} />}
						</Container>
						{albums && <AlbumsOverview data={albums} />}
					</OverviewStyles>
				</UserLayout>
			</Layout>
		);
	}
}

export default OverviewPage;
