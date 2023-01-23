import styled from 'styled-components';

const TaskDeleteLayout = styled.button`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
`;

export const TaskDeleteStyle = (props) => {
    return <TaskDeleteLayout {...props}>{props.children}</TaskDeleteLayout>;
};
