import styled from 'styled-components';

export const Button = styled.button`
	outline: none;
	background: ${props => (props.primary ? props.theme.green : 'transparent')};
	border: 1px solid ${props => props.theme.green};
	border-radius: 5px;
	font-size: 2rem;
	color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	padding: 1rem 2rem;
	cursor: pointer;
	transition: all 300ms ease-out;

	margin-top: 1.5rem;

	&:hover {
		transform: translateY(-3px);
		box-shadow: ${props => props.theme.shadow};
	}
	&:active {
		transform: translateY(0px);
	}
`;
