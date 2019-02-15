import styled from 'styled-components';
import { animated } from 'react-spring';

export const HeaderStyles = styled.header`
	min-width: 100px;
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 5rem;
	@media (max-width: 1000px) {
		margin-right: 0;
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1000px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 5rem;
	}

	> div {
		transition: all 300ms ease-out;
		&:hover {
			transform: translateY(-3px);
			text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
		}
		&:not(:last-child) {
			margin-bottom: 5rem;
			@media (max-width: 1000px) {
				margin-bottom: 0;
			}
		}
	}
`;

export const NavItem = styled(animated.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	color: ${props => (props.activeitem ? props.theme.green : props.theme.white)};
	svg {
		transition: all 300ms ease-out;
		height: 3rem;
		width: 3rem;
		fill: ${props => (props.activeitem ? props.theme.green : props.theme.white)};
	}

	&:not(:last-child) {
		margin-bottom: 5rem;
	}

	@media (max-width: 1000px) {
		font-size: 1.5rem;
	}
`;

export const Avatar = styled.div`
	border-radius: 50%;
	background: ${props => props.theme.green};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5rem;
	height: 70px;
	width: 70px;
	> svg {
		height: 4rem;
		width: 4rem;
		fill: ${props => props.theme.white};
	}
`;
