import styled from 'styled-components';

const H1Layout = styled.h1`
    font-size: 3.052rem;
    letter-spacing: 10px;
    color: ${({ theme }) => theme.h1Color};
`;

export const H1Style = (props) => {
    return <H1Layout {...props}>{props.children.toUpperCase()}</H1Layout>;
};
