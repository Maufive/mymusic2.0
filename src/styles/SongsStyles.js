import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const SongStyles = styled.div`
	width: 100%;
	padding: 0 5rem;
	animation: ${fadeIn} 1000ms ease 1 normal forwards running;

	@media (max-width: 1000px) {
		padding: 0;
	}
`;

export const Songlist = styled.ol`
	padding: 0;
	list-style: none;
	counter-reset: my-counter;
	animation: ${fadeIn} 1000ms ease 1 normal forwards running;

	li {
		font-size: 2rem;
		counter-increment: my-counter;
		display: flex;
		align-items: center;
		&::before {
			content: counter(my-counter) '. ';
			font-weight: 700;
			color: ${props => props.theme.green};
			margin-right: 2rem;
		}

		a {
			width: 100%;
			div {
				align-items: center;
				width: 100%;
				display: flex;
				justify-content: space-between;
				span {
					display: flex;
					align-items: center;
					svg {
						margin-right: 1rem;
						fill: ${props => props.theme.white};
						height: 2rem;
						width: 2rem;
					}
				}
			}
		}
	}
`;
