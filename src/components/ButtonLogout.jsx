import useAuthentication from "@/hook/useAuthentication";

const ButtonLogout = ({ icon, navClosed }) => {
  const { logoutUser } = useAuthentication();

  return (
    <button
      onClick={() => logoutUser()}
      className="relative z-40 flex items-center gap-4 py-5 min-w-full px-[30px] cursor-pointer transition-all  hover:bg-medium-gray hover:text-red-600 border-t border-solid border-gray-800"
    >
      <div className="text-[22px]">{icon}</div>
      {!navClosed ? <div className="text-[14px] capitalize">logout</div> : ""}
    </button>
  );
};

export default ButtonLogout;
