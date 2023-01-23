import styled from 'styled-components';

const TaskItemLayout = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    width: 100%;
    padding: 1.6rem 3.2rem 1.6rem 6.4rem;
    font-size: 2rem;
    border: none;
    outline: none;

    /* color: ${(props) =>
        props.isChecked ? props.theme.todoInputColor : null}; */

    color: ${({ theme, checked }) => {
        return checked ? theme.completedColor : theme.todoInputColor;
    }};

    margin: 0;
`;

export const TaskItemStyle = (props) => {
    return (
        <TaskItemLayout {...props} ref={props.isOverflowRef}>
            {props.children}
        </TaskItemLayout>
    );
};
