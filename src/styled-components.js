import styled from '@emotion/styled/macro';

export const Container = styled.div`
	margin-left: 200px;
`;

export const Main = styled.main`
	display: flex;
	flex-wrap: wrap;
`;

export const Img = styled.img`
	width: 100%;
`;

export const Card = styled.div`
	flex: 1 0 200px;
	margin: 2rem;
	&:hover {
		${Img} {
			box-shadow: 1px 8px 16px 0 rgba(0, 0, 0, 0.4);
		}
	}
`;

export const Title = styled.h3``;

export const SubContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 2rem;
`;

export const Menu = styled.ul`
	margin-top: 25px;
	padding: 0.5rem;
	position: absolute;
	right: 2rem;
	background: #fff;
	border-radius: 3px;
	box-shadow: 1px 8px 16px 0 rgba(0 0 0);
`;

export const Button = styled.button`
	padding: 0.5rem 1.5rem;
	border-radius: 1rem;
	background: none;
	cursor: pointer;
`;
