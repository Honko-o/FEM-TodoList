import styled, { css } from 'styled-components';

const TaskCheckboxLabelLayout = styled.label`
    position: relative;
    cursor: pointer;

    ::before {
        content: '';
        width: 0%;
        height: 1px;
        background-color: ${(props) =>
            props.checked ? props.theme.completeLineColor : null};
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: all 120ms;
    }

    ${(props) =>
        props.checked &&
        props.isOverflow &&
        css`
            ::before {
                width: 80%;
            }
        `}

    ${(props) =>
        props.checked &&
        !props.isOverflow &&
        css`
            ::before {
                width: 100%;
            }
        `}

    color: ${({ theme, checked }) => {
        return checked ? theme.completedColor : theme.todoInputColor;
    }};
`;

export const TaskCheckboxLabelStyle = (props) => {
    // console.log(props);
    return (
        <TaskCheckboxLabelLayout htmlFor={props.id} {...props}>
            {props.children}
        </TaskCheckboxLabelLayout>
    );
};
