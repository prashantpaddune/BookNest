import React from 'react';

interface OptionType {
    value: string;
    label: string;
}

interface FiltersProps {
    options: OptionType[];
    name: string;
    value: string | string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters: React.FC<FiltersProps> = ({ options, name, value, onChange }) => {
    return (
        <select onChange={onChange} id={name} value={value} className="p-2 border rounded-md m-1 w-40">
            {options.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
            ))}
        </select>
    );
}

export default Filters;
