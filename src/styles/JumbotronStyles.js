import styled from 'styled-components';

export const JumbotronStyles = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2.5rem;
	span {
		display: flex;
		align-items: center;
		h1 {
			font-family: 'Sarala';
			font-weight: 700;
		}
		svg {
			fill: ${props => props.theme.green};
			height: 2.5rem;
			width: 2.5rem;
			margin-right: 1rem;
		}
	}
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem 0;

		@media (max-width: 1000px) {
			flex-direction: column;
			padding: 0;
		}
	}
`;

export const Searchform = styled.form`
	display: flex;
	@media (max-width: 1000px) {
		margin-top: 3rem;
	}

	> div {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;

		input[type='text'] {
			padding: 1rem 1.5rem;
			font-size: 2rem;
			background: ${props => props.theme.white};
			border: none;
			border-radius: 5px 0 0 5px;

			&:focus {
				outline: none;
			}

			&:valid + label {
				transform: translateY(-130%);
				color: ${props => props.theme.white};
			}

			&:focus + label {
				border: none;
				transform: translateY(-130%);
				color: ${props => props.theme.white};
			}
		}

		label {
			position: absolute;
			color: ${props => props.theme.grey};
			transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
			margin-left: 1rem;
		}
	}
`;

export const Searchbutton = styled.button`
	outline: none;
	background: ${props => (props.primary ? props.theme.green : 'transparent')};
	border: 1px solid ${props => props.theme.green};
	border-radius: 0 5px 5px 0;
	font-size: 2rem;
	color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	padding: 1rem 1.5rem;
	cursor: pointer;
	transition: all 300ms ease-out;
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		height: 2rem;
		width: 2rem;
		fill: ${props => props.theme.white};
		transition: all 300ms ease-out;
	}

	&:hover + svg {
		transform: translateY(-3px);
		box-shadow: ${props => props.theme.shadow};
	}
	&:active {
		transform: translateY(0px);
	}
`;
