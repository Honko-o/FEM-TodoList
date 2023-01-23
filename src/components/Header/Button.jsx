import { ButtonStyle } from './ButtonStyle';

export const Button = (props) => {
    return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
};
