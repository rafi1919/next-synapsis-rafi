import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
  heading: string;
}

const Layout = ({ children, heading }: LayoutProps) => {
  return (
    <div className="lg:h-[100vh] md:h-[100vh] h-[100%]">
      <title>Gread-Blog</title>
      <Navbar />
      <div className="flex flex-col lg:w-[900px] md:w-[900px] max-w-[900px] mx-auto items-center justify-center pt-20 p-3">
        <p className="font-bold text-[32px]">{heading}</p>
        {children}
      </div>
    </div>
  );
};
export default Layout;
