import styled from 'styled-components';

const FooterLayout = styled.footer`
    background-color: transparent;
    border: none;
    text-align: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.footerColor};
`;

export const FooterStyle = ({ children, onClick }) => {
    return <FooterLayout onClick={onClick}>{children}</FooterLayout>;
};
