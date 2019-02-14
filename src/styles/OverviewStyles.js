import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OverviewStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;

	h2 {
		text-align: center;
		margin-bottom: 3rem;
		text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100%;
	margin-bottom: 5rem;
`;

export const TopFiveBlock = styled.div`
	min-width: 44.5%;
	min-height: 250px;

	h2 {
		text-align: center;
	}

	ol {
		width: 100%;

		li {
			font-size: 2rem;
			transition: all 300ms ease-out;
			a {
				span {
					> svg {
						height: 1.5rem;
						width: 1.5rem;
						fill: ${props => props.theme.white};
						margin-right: 0.5rem;
						transition: all 300ms ease-out;
					}
					&:last-child {
						float: right;
					}
				}
			}

			&:hover {
				cursor: pointer;
				color: ${props => props.theme.green};
				> a {
					color: ${props => props.theme.green};
					> span > svg {
						fill: ${props => props.theme.green};
					}
				}
			}
		}
	}
`;

export const TopAlbumsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const AlbumContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> a {
		transition: all 300ms ease-out;
		span {
			margin-top: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		svg {
			height: 1.5rem;
			width: 1.5rem;
			fill: ${props => props.theme.white};
			margin-right: 0.5rem;
		}
		&:hover {
			transform: scale(1.05);
		}
	}
`;

export const Album = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	width: 175px;
	height: 175px;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;

export const Divider = styled.span`
	opacity: 0;
	height: 300px;
	width: 3px;
	background: linear-gradient(
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.15) 25%,
		rgba(255, 255, 255, 0.3) 50%,
		rgba(255, 255, 255, 0.15) 75%,
		rgba(255, 255, 255, 0) 100%
	);
	animation: ${fadeIn} 1000ms ease 1 normal forwards running;
`;
