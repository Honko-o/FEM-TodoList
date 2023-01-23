import styled from 'styled-components';
import checkIcon from '../../../assets/icon-check.svg';

const TaskCheckboxStyle = styled.input`
    cursor: pointer;
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    left: 1.6rem;
    top: calc(50% - 0.1rem);
    transform: translateY(-50%);
    font-size: 2rem;
    border: none;
    outline: none;
    border-radius: 50%;
    color: ${({ theme }) => theme.todoInputColor};
    margin: 0;
    background: url(${checkIcon}),
        linear-gradient(125deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    place-content: center;

    :hover {
        background: linear-gradient(
            125deg,
            hsl(233, 11%, 84%),
            hsl(233, 11%, 84%)
        );
    }

    :checked:hover {
        background: url(${checkIcon}),
            linear-gradient(125deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        background-repeat: no-repeat;
        background-position: center;
    }

    ::before {
        content: '';
        width: 2.2rem;
        height: 2.2rem;
        transform: scale(1);
        transition: 120ms all ease-in-out;
        border-radius: 50%;
        box-shadow: inset 2.2rem 2.2rem ${({ theme }) => theme.todobgColor};
    }

    :checked::before {
        transform: scale(0);
    }
`;

export const TaskCheckboxInput = (props) => {
    return <TaskCheckboxStyle id={props.id} {...props} />;
};
