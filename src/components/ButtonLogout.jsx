const ButtonLogout = ({ icon, navClosed }) => {
  return (
    <button className="flex items-center gap-4 py-5 min-w-full px-[30px] cursor-pointer transition-all  hover:bg-medium-gray hover:text-red-600">
      <div className="text-[22px]">{icon}</div>
      {!navClosed ? <div className="text-[14px] capitalize">logout</div> : ""}
    </button>
  );
};

export default ButtonLogout;
