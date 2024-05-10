import { useState } from "react";
import CardPost from "@/templates/components/CardPost";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import Layout from "@/templates/components/Layout";

interface HomeProps {
  postData: any;
}

const HomeView: React.FC<HomeProps> = ({ postData }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const postDataArray = postData ?? [];

  const itemsPerPage = 6;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil((postDataArray?.length ?? 0) / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Layout heading="Today's Post">
      {postDataArray
        .slice(offset, offset + itemsPerPage)
        .map((item: any, index: any) => (
          <Link key={index} href={`./Post/${item.id}`}>
            <CardPost title={item.title} body={item.body} />
          </Link>
        ))}
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
export default HomeView;
