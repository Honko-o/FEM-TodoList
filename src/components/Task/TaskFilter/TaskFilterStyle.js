import styled from 'styled-components';

const TaskFilterLayout = styled.div`
    display: flex;
    gap: 3.6rem;
    padding: 1.6rem;
    color: ${({ theme }) => theme.filterColor};
`;

export const TaskFilterStyle = (props) => {
    return <TaskFilterLayout {...props}>{props.children}</TaskFilterLayout>;
};
