import { TaskFilterStyle } from './TaskFilterStyle';
import { FilterButtons } from '../FilterButtons/FilterButtons';
import { useDispatch } from 'react-redux';
import { clearAllCompleted } from '../../../store/reducers/taskListSlice';

export const TaskFilter = ({ tasksLength, setFilter }) => {
    const dispatch = useDispatch();

    return (
        <TaskFilterStyle>
            <p>{tasksLength} Items left</p>

            <FilterButtons setFilter={setFilter} />
            <button
                onClick={() => dispatch(clearAllCompleted())}
                style={{ color: 'inherit', marginLeft: 'auto' }}
            >
                Clear Completed
            </button>
        </TaskFilterStyle>
    );
};
