import deleteIcon from '../../../assets/icon-cross.svg';
import { TaskDeleteStyle } from './TaskDeleteStyle';
import { deleteTask } from '../../../store/reducers/taskListSlice';
import { useDispatch } from 'react-redux';

export const TaskDelete = ({ setTaskList, id }) => {
    const dispatch = useDispatch();

    const onTaskDelete = (event) => {
        event.stopPropagation();
        onTasksFilter(id);
    };

    const onTasksFilter = (taskId) => {
        // setTaskList((prevState) => {
        //     return prevState.filter((el) => el.id !== taskId);
        // });
        dispatch(deleteTask(taskId));
    };

    return (
        <TaskDeleteStyle onClick={onTaskDelete}>
            <img
                src={deleteIcon}
                width="22.2rem"
                height="22.2rem"
                alt="delete task icon"
            />
        </TaskDeleteStyle>
    );
};
