import styled from "styled-components";

const Title = styled.h1`
	font-size: 34px;
  font-weight: 800;
	color: var(--text-dark);
`;

const Subtitle = styled.h4`
	font-size: 0.9rem;
	color: var(--text-dark);

	span {
		color: red;
	}
`;

const Form = styled.form`
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const PricesContainer = styled.div`
	display: flex;
	gap: 20px;
`

const Label = styled.label`
	font-weight: 700;

	color: var(--text-dark);

	span {
		color: red;
	}
`

const Input = styled.input`
	width: 100%;
	height: 40px;

	padding: 0 10px;

	border: 1px solid gray;
	border-radius: 0.5rem;

	&:focus {
		outline: none;
	}
`;

const Select = styled.select`
	color: gray;
	background-color: transparent;
	
	padding: 5px 10px;

	border: 1px solid gray;
	border-radius: 0.5rem;

	margin-bottom: 10px;
`;

const SubmitBtn = styled.button`
	border: 2px solid var(--button-background);
	background-color: transparent;
	
	font-weight: 800;
	color: var(--button-background);

	height: 40px;
	border-radius: 0.6rem;

	&:hover {
		background-color: var(--button-background);
		color: var(--text-body);
		border-radius: 1.5rem;
	}
`;

export {
	Form,
	Input,
	InputContainer,
	Label,
	PricesContainer,
	Select,
	SubmitBtn,
	Subtitle,
	Title,
};
