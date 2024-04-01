const PrivateLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <nav>navegação</nav>
      <main>{children}</main>
    </div>
  );
};

export default PrivateLayout;
