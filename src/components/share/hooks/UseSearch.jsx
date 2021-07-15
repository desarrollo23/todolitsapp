const { useState, useMemo } = require("react");

function useSearch(list){
    const [ query, setQuery ] = useState('');
    const [ filteredList, setFilteredList ] = useState(list);

    useMemo(() => {
        const result = list.filter(item => {
            return item.name
                .toLowerCase()
                .includes(query.toLowerCase())
        });

        setFilteredList(result);
    }, [list, query]);

    return { query, setQuery, filteredList };
}

export default useSearch;