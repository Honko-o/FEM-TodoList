import { TaskCheckboxLabel } from './TaskCheckboxLabel';
import { TaskCheckboxInput } from './TaskCheckboxStyle';

export const TaskCheckbox = ({ labelClass, label, ...props }) => {
    return (
        <>
            <TaskCheckboxLabel {...props}>{label}</TaskCheckboxLabel>
            <TaskCheckboxInput {...props} />
        </>
    );
};
