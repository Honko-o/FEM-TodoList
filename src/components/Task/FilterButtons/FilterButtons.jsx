import { useState } from 'react';

const buttonsContent = ['All', 'Active', 'Completed'];

export const FilterButtons = ({ setFilter, style }) => {
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    const filterIndexHandler = (index) => setSelectedFilterIndex(index);

    const setFilterHandler = (contentText) => {
        switch (contentText) {
            case 'Active':
                setFilter('Active');
                break;
            case 'Completed':
                setFilter('Completed');
                break;
            default:
                setFilter('All');
        }
    };

    const renderButtons = () => {
        return buttonsContent.map((content, i) => {
            if (content)
                if (i === selectedFilterIndex) {
                    return (
                        <button
                            key={content}
                            onClick={() => setFilterHandler(content)}
                            className="active"
                        >
                            {content}
                        </button>
                    );
                }

            if (i !== buttonsContent.length - 1) {
                return (
                    <button
                        key={content}
                        // style={{ color: 'inherit' }}
                        onClick={() => {
                            filterIndexHandler(i);
                            setFilterHandler(content);
                        }}
                    >
                        {content}
                    </button>
                );
            }

            return (
                <button
                    key={content}
                    // style={{ color: 'inherit' }}
                    onClick={() => {
                        setSelectedFilterIndex(i);
                        setFilterHandler(content);
                    }}
                >
                    {content}
                </button>
            );
        });
    };

    return <div className="filter-btns">{renderButtons()}</div>;
};
