import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ClosedNavbarContextProvider } from "@/context/ClosedNavbarContext";

const PrivateLayout = ({ children }) => {
  return (
    <ClosedNavbarContextProvider>
      <div className="min-h-screen">
        <Navbar />
        <main
          className={`h-[1000px] p-[30px] transition-all ml-[240px]  max-w-full`}
        >
          <Header /> <div>{children}</div>
        </main>
      </div>
    </ClosedNavbarContextProvider>
  );
};

export default PrivateLayout;
