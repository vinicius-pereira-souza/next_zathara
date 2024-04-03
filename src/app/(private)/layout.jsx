import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ClosedNavbarContextProvider } from "@/context/ClosedNavbarContext";

const PrivateLayout = ({ children }) => {
  return (
    <ClosedNavbarContextProvider>
      <div className="min-h-screen bg-light-grey dark:bg-themeDarkPage dark:text-light-grey">
        <Navbar />
        <main
          className={`min-h-screen p-[30px] transition-all ml-[240px]  max-w-full`}
        >
          <Header /> <div>{children}</div>
        </main>
      </div>
    </ClosedNavbarContextProvider>
  );
};

export default PrivateLayout;
