const Input = ({ type, name, text, placeholder }) => {
  return (
    <div className="mb-4 flex flex-col mt-[18px]">
      <label
        className="text-[15px] text-gray-320 mb-2  font-semibold"
        htmlFor={name}
      >
        {text}
      </label>
      <input
        className="w-full px-5 py-4 rounded"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
