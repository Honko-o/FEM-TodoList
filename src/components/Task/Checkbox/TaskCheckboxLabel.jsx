import { TaskCheckboxLabelStyle } from './TaskCheckboxLabelStyle';

// { labelClass, inputID, label }
export const TaskCheckboxLabel = (props) => {
    return (
        <TaskCheckboxLabelStyle {...props}>
            {props.children}
        </TaskCheckboxLabelStyle>
    );
};
