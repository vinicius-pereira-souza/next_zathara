import Sidebar from "../ui/sidebar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen relative">
        <Sidebar />
        <div>
          <header>header</header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
