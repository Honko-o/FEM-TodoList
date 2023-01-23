import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputContainer, FormContainer } from '../../layout/Containers';
import { TodoInput } from './TodoInput';
import { TodoLabel } from './TodoLabel';
import { addTask } from '../../store/reducers/taskListSlice';

export const TodoForm = () => {
    const dispatch = useDispatch();
    // This will need Debounce soon
    const [todoValue, setTodoValue] = useState('');

    const onChange = (e) => {
        setTodoValue(e.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (!todoValue.trim()) {
            return;
        }
        dispatch(addTask(todoValue));
        setTodoValue('');
    };

    return (
        <FormContainer onSubmit={onSubmitHandler}>
            <InputContainer circle>
                <TodoLabel htmlFor="task" className="sr-only">
                    Write the task description to add to text
                </TodoLabel>
                <TodoInput
                    id="task"
                    type="text"
                    value={todoValue}
                    onChange={onChange}
                    placeholder="Create a new todo..."
                />
            </InputContainer>
        </FormContainer>
    );
};
