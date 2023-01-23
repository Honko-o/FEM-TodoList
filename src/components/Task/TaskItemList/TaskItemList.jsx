import { reOrderTasks } from '../../../store/reducers/taskListSlice';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { DraggableTaskItem } from './DraggableTaskItem';
import { useDispatch } from 'react-redux';

let portal = document.createElement('div');
document.body.appendChild(portal);

export const TaskItemList = ({ taskList }) => {
    const dispatch = useDispatch();

    const onDragEnd = (result) => {
        dispatch(reOrderTasks(result));
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="taskList">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {taskList.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => {
                                    return (
                                        <>
                                            <DraggableTaskItem
                                                provided={provided}
                                                snapshot={snapshot}
                                                item={item}
                                            />
                                            {provided.placeholder}
                                        </>
                                    );
                                }}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};
