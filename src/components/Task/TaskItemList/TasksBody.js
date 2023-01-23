import styled from 'styled-components';

const TasksBodyLayout = styled.div`
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.todobgColor};
    box-shadow: 0 10px 20px 10px rgb(0 0 0 / 10%);
    margin-bottom: 3.2rem;
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
`;

export const TasksBodyWrapper = (props) => {
    return (
        <TasksBodyLayout style={props.style ? props.style : null} {...props}>
            {props.children}
        </TasksBodyLayout>
    );
};
