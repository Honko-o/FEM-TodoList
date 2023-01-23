import { TaskFilterStyle } from './TaskFilterStyle';
import { FilterButtons } from '../FilterButtons/FilterButtons';
import { useDispatch } from 'react-redux';
import { clearAllCompleted } from '../../../store/reducers/taskListSlice';
import { useWindowSize } from '../../../hooks/useWindowSize';

export const TaskFilter = ({ tasksLength, setFilter }) => {
    const { width } = useWindowSize();
    const dispatch = useDispatch();

    return (
        <TaskFilterStyle>
            <p>{tasksLength} Items left</p>

            {width >= 600 ? <FilterButtons setFilter={setFilter} /> : null}
            <button
                onClick={() => dispatch(clearAllCompleted())}
                style={{ color: 'inherit', marginLeft: 'auto' }}
            >
                Clear Completed
            </button>
        </TaskFilterStyle>
    );
};
