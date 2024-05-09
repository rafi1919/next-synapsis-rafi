import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import Button from '@/templates/components/Button';
import {FaUser} from 'react-icons/fa'
import { useRouter } from 'next/router';
import Layout from '@/templates/components/Layout';
import SearchBar from '@/templates/components/Searchbar';

interface UserProps {
    postData: any;
}

const UserView: React.FC<UserProps> = ({ postData }) => {
    const [searchResults, setSearchResults] = useState(postData);
    const [currentPage, setCurrentPage] = useState(0);
    const route = useRouter()

    const itemsPerPage = 6;
    const offset = currentPage * itemsPerPage;
    const pageCount = Math.ceil(postData.length / itemsPerPage);

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNavigate=()=>{
        route.push('/AddUser')
    }

    return (
        <Layout heading='User List'>
            <SearchBar data={postData} setSearchResults={setSearchResults} />
            <Button text='Create User' onClick={handleNavigate}/>
            <div className='flex flex-col gap-4 '>

                {searchResults.length > 0 ? (
                    searchResults.slice(offset, offset + itemsPerPage).map((item: any, index: any) => (
                        <div key={index}>                  
                            <Link key={index} href={`./User/${item.id}`}>
                            <div className=" flex items-center">
                                    <div className="rounded-l-md p-3 border-[1px]  text-black bg-green-500">
                                        <FaUser />
                                    </div>
                                    <p className="bg-green-300 p-2 rounded-r-md text-white w-[400px]">{item.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    postData.slice(offset, offset + itemsPerPage).map((item: any, index: any) => (
                        <div key={index}>                  
                            <Link key={index} href={`./User/${item.id}`}>
                            <div className=" flex items-center">
                                    <div className="rounded-l-md p-3 border-[1px]  text-black bg-green-500">
                                        <FaUser />
                                    </div>
                                    <p className="bg-green-300 p-2 rounded-r-md text-white w-[400px]">{item.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>

             <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                onPageChange={handlePageChange}
                containerClassName=" flex justify-center"
                activeClassName="bg-blue-500 text-white"
                previousLabel="Prev"
                nextLabel="Next"
                previousClassName=""
                nextClassName=""
                disabledClassName="opacity-50 cursor-not-allowed"
                pageClassName="inline-block m-2 p-2 rounded-md hover:shadow-md hover:shadow-green-500 active:shadow-black  cursor-pointer"
            />
        </Layout>
    );
};
export default UserView;
