import { H1Style } from './H1Style';

export const H1 = (props) => {
    return <H1Style {...props}>{props.children}</H1Style>;
};
