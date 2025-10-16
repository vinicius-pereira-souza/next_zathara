import Sidebar from "../ui/sidebar";
import Header from "../ui/header";
import Container from "../ui/container";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen relative">
        <Sidebar />
        <Container>
          <div>
            <Header />
            <main className="px-6">{children}</main>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PrivateLayout;
