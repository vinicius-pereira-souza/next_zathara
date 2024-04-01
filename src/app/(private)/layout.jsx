import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ClosedNavbarContextProvider } from "@/context/ClosedNavbarContext";

const PrivateLayout = ({ children }) => {
  return (
    <ClosedNavbarContextProvider>
      <div className="min-h-screen flex">
        <Navbar />
        <main
          className={`flex-1 p-[30px] transition-all ml-[240px]  max-w-full`}
        >
          <Header /> <div>{children}</div>
        </main>
      </div>
    </ClosedNavbarContextProvider>
  );
};

export default PrivateLayout;
