import styled, { css } from 'styled-components';

const ContainerLayout = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0 1.6rem;
    left: 50%;
    transform: translateX(-50%);
    position: ${(props) => (props.position ? props.position : 'relative')};

    @media (min-width: 25em) {
        max-width: 55rem;
    }
`;

export const Container = ({ children, ...props }) => {
    return <ContainerLayout {...props}>{children}</ContainerLayout>;
};

const InputStyles = styled.div`
    position: relative;

    ${(props) =>
        props.circle &&
        css`
            &:after {
                content: '';
                width: 2.5rem;
                height: 2.5rem;
                position: absolute;
                left: 1.6rem;
                top: 50%;
                transform: translateY(calc(-50% - 0.1rem));
                border: 0.1rem solid ${({ theme }) => theme.circleColor};
                border-radius: 50%;
            }
        `}
`;

export const InputContainer = (props) => {
    // console.log(props);
    return <InputStyles {...props}>{props.children}</InputStyles>;
};

const FlexLayout = styled.div`
    display: flex;
    justify-content: ${({ justifyContent }) =>
        justifyContent ? justifyContent : null};
    margin: 6.2rem 0 3.2rem;
`;

export const FlexContainer = (props) => {
    return <FlexLayout {...props}>{props.children}</FlexLayout>;
};

const FormLayout = styled.form`
    margin-bottom: 3.2rem;
`;

export const FormContainer = (props) => {
    return <FormLayout {...props}>{props.children}</FormLayout>;
};
