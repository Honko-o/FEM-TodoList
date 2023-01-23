import styled from 'styled-components';

const TaskItemLayout = styled.li`
    overflow: hidden;

    :not(:last-child):not(:first-child) {
        border-radius: 0;
    }
    :not(:last-child) {
        border-bottom: 1px solid ${(props) => props.theme.dividerColor};
    }
    :first-child {
        border-top-left-radius: 0.6rem;
        border-top-right-radius: 0.6rem;
    }

    background-color: ${(props) =>
        props.isDragging ? props.theme.todobgColor : null};
`;

export const TaskItemContainer = (props) => {
    return (
        <TaskItemLayout {...props} ref={props.innerRef}>
            {props.children}
        </TaskItemLayout>
    );
};
