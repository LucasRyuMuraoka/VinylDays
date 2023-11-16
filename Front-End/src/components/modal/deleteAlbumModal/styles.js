import styled from "styled-components";

const Container = styled.section`
	width: 100%;
	height: 400px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 40px;
`;

const Title = styled.h1`
	text-align: center;
	font-size: 34px;
  font-weight: 800;
	color: var(--text-dark);
`;

const Subtitle = styled.h4`
	text-align: center;
	font-size: 0.9rem;
	color: var(--text-dark);

	span {
		color: red;
		text-decoration: underline;
		offset-position: 0;
	}
`;

const BtnContainer = styled.section`
	display: flex;
	gap: 20px;
`;

const CancelBtn = styled.button`
	width: 150px;
	height: 40px;

	font-weight: 800;

	border: 0;
	border-radius: 0.5rem;

	border: 2px solid var(--button-background);
	background-color: transparent;
	
	font-weight: 800;
	color: var(--button-background);

	border-radius: 0.6rem;

	&:hover {
		background-color: var(--button-background);
		color: var(--text-body);
		border-radius: 1.5rem;
	}
`;

const ConfirmBtn = styled.button`
	width: 150px;
	height: 40px;

	font-weight: 800;

	border: 0;
	border-radius: 0.5rem;

	background-color: transparent;

	color: red;
	border: 2px solid red;

	&:hover {
		background-color: red;
		color: var(--text-body);
		border-radius: 1.5rem;
	}
`;

export {
	BtnContainer,
	CancelBtn,
	ConfirmBtn,
	Container,
	Subtitle,
	Title
}
