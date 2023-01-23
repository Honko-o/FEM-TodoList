import sunIcon from '../../assets/icon-sun.svg';
import moonIcon from '../../assets/icon-moon.svg';
import { Button } from './Button';
import { FlexContainer } from '../../layout/Containers';
import { H1 } from './H1';

export const Header = ({ themeMode, setThemeMode }) => {
    const themeToggleHandler = () => {
        if (themeMode === 'light') {
            setThemeMode('dark');
            window.localStorage.setItem('theme', 'dark');
        } else if (themeMode === 'dark') {
            setThemeMode('light');
            window.localStorage.setItem('theme', 'light');
        }
    };

    // console.log(themeMode);

    return (
        <FlexContainer as="header" justifyContent="space-between">
            <H1>Todo</H1>
            <Button onClick={themeToggleHandler}>
                <img
                    src={themeMode === 'dark' ? sunIcon : moonIcon}
                    alt="Change Light mode to Dark mode and vice versa"
                />
            </Button>
        </FlexContainer>
    );
};
