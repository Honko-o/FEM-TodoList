import styled from 'styled-components';

const ButtonLayout = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const ButtonStyle = ({ children, onClick }) => {
    return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};
