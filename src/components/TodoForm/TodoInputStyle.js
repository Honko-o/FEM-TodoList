import styled from 'styled-components';

const InputLayout = styled.input`
    display: block;
    width: 100%;
    padding: 1.6rem 3.2rem 1.6rem 6.4rem;
    font-size: 2rem;
    border: none;
    outline: none;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.todobgColor};
    color: ${({ theme }) => theme.todoInputColor};

    ::placeholder {
        color: ${({ theme }) => theme.todoInputPlaceholder};
    }
`;

export const TodoInputStyle = (props) => {
    console.log(props);
    return <InputLayout {...props}>{props.children}</InputLayout>;
};
