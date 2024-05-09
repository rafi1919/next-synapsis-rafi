import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface searchProps{
    data:any
    setSearchResults :any
}

const SearchBar = ({ data, setSearchResults }:searchProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event:any) => {
        const value = event.target.value;
        setSearchTerm(value);

        const filteredResults = data.filter((item:any) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className="pb-2 relative mx-auto text-gray-600">
            <input
                className="shadow-md hover:shadow-green-500 active:shadow-blue-700 transition-500 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
                type="search"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit" className="absolute right-0  mt-3 mr-4">
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
