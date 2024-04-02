import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ClosedNavbarContextProvider } from "@/context/ClosedNavbarContext";
import { ThemeContextProvider } from "@/context/ThemeContext";

const PrivateLayout = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ClosedNavbarContextProvider>
        <div className="min-h-screen">
          <Navbar />
          <main
            className={`min-h-screen p-[30px] transition-all ml-[240px]  max-w-full`}
          >
            <Header /> <div>{children}</div>
          </main>
        </div>
      </ClosedNavbarContextProvider>
    </ThemeContextProvider>
  );
};

export default PrivateLayout;
