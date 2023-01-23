import { createPortal } from 'react-dom';
import { TaskItem } from './TaskItem';
import { TaskItemContainer } from './TaskItemContainer';

const portal = document.createElement('div');
document.body.appendChild(portal);

// function getStyle(style, snapshot) {
//     if (!snapshot.isDropAnimating) {
//         return style;
//     }
//     const { curve, duration } = snapshot.dropAnimation;
//     // add a bit of turn for fun

//     // patching the existing style
//     return {
//         ...style,
//         // slowing down the drop because we can
//         transition: `all ${curve} ${duration + 1}s`,
//     };
// }

export const DraggableTaskItem = (props) => {
    const { id, taskDescription, completed } = props.item;
    const provided = props.provided;
    const snapshot = props.snapshot;
    // console.log(snapshot);

    const usePortal = snapshot.isDragging;

    const child = (
        <>
            <TaskItemContainer
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                {...snapshot}
                innerRef={provided.innerRef}
                inPortal={usePortal}
                // style={getStyle(provided.draggableProps.style, snapshot)}
            >
                <TaskItem
                    id={id}
                    label={taskDescription}
                    completed={completed}
                />
            </TaskItemContainer>
        </>
    );

    if (!usePortal) {
        return child;
    }

    return createPortal(child, portal);
};
