import { useState, useCallback } from 'react';
import { GlobalStyles } from './theme/GlobalStyles';
import { Container } from './layout/Containers';
import { Header } from './components/Header/Header';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TaskItemList } from './components/Task/TaskItemList/TaskItemList';
import { TaskFilter } from './components/Task/TaskFilter/TaskFilter';
import { TasksBodyWrapper } from './components/Task/TaskItemList/TasksBody';
import { Footer } from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/Theme';
import { useEffect } from 'react';

const App = () => {
    const tasks = useSelector((state) => state.tasks);
    const [themeMode, setThemeMode] = useState('light');
    const [filter, setFilter] = useState('All');

    const getTheme = () => {
        return themeMode === 'light' ? lightTheme : darkTheme;
    };

    useEffect(() => {
        if (window.localStorage.getItem('theme')) {
            const LStheme = window.localStorage.getItem('theme');
            setThemeMode(LStheme);
        } else {
            console.log('default theme');
            window.localStorage.setItem('theme', 'light');
        }
    }, []);

    const filteredTasks = useCallback(() => {
        // console.log(globalState);
        if (filter === 'All') {
            return tasks;
        }

        if (filter === 'Active') {
            return tasks.filter((task) => (task.completed ? false : true));
        }

        if (filter === 'Completed') {
            return tasks.filter((task) => (task.completed ? true : false));
        }
    }, [filter, tasks]);

    return (
        <ThemeProvider theme={getTheme()}>
            <GlobalStyles themeMode={themeMode} />
            <Container position="absolute">
                <Header themeMode={themeMode} setThemeMode={setThemeMode} />
                <TodoForm />
                <TasksBodyWrapper>
                    <TaskItemList taskList={filteredTasks()} />
                    <TaskFilter
                        tasksLength={filteredTasks().length}
                        setFilter={setFilter}
                    />
                </TasksBodyWrapper>
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

export default App;
