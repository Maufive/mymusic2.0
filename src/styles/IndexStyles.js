import styled from 'styled-components';
import { animated } from 'react-spring';

export const IndexStyles = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Title = styled(animated.h1)`
	font-family: 'Sarala';
	font-weight: 700;
	font-size: 3rem;
	text-align: center;
`;
