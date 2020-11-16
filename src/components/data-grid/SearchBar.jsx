import React, {useState} from 'react';
import {SearchBarContainer} from './styles';

export const SearchBar = ({
setTableData,
data
}) => {
        const [inputText, setInputText] = useState('');
        const handleSearch = (searchText) => {
    setInputText(searchText);
    const filteredData = data.filter(record => {
        return record.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setTableData(filteredData);
}

    return (<SearchBarContainer><input value={inputText} onChange={e => (handleSearch(e.target.value))} /></SearchBarContainer>);
}