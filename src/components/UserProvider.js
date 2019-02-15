import React, { Component } from 'react';

const UserContext = React.createContext();

class UserProvider extends Component {
	state = {
		user: null,
	};

	setUser = async obj => {
		await this.setState({ user: obj });
	};

	render() {
		const user = this.state.user;
		return (
			<UserContext.Provider
				value={{
					setUser: this.setUser,
					user,
				}}
			>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

const UserConsumer = UserContext.Consumer;

export default UserProvider;
export { UserConsumer };
