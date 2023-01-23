import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TaskCheckbox } from '../Checkbox/TaskCheckbox';
import { TaskDelete } from '../TaskDelete/TaskDelete';
import { TaskItemStyle } from './TaskItemStyle';
import { toggleComplete } from '../../../store/reducers/taskListSlice';
import { useIsOverflow } from '../../../hooks/useIsOverflow';

export const TaskItem = ({ label, id, completed }) => {
    const dispatch = useDispatch();
    const ref = useRef();
    const isOverflow = useIsOverflow(ref);

    // console.log(isOverflow);

    const toggleCheckbox = () => {
        dispatch(toggleComplete(id));
    };

    return (
        <TaskItemStyle
            onClick={toggleCheckbox}
            isChecked={completed}
            isOverflowRef={ref}
            isOverflow={isOverflow}
        >
            <TaskCheckbox
                type="checkbox"
                label={label}
                id={id}
                checked={completed}
                onChange={() => {}}
                isOverflow={isOverflow}
                readOnly
            />
            <TaskDelete id={id} />
        </TaskItemStyle>
    );
};
