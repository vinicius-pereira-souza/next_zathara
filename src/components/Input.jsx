const Input = ({ type, name, text, placeholder, state, setState }) => {
  return (
    <div className="mb-4 flex flex-col mt-[15px]">
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
        onChange={(e) => setState(e.currentTarget.value)}
        value={state}
      />
    </div>
  );
};

export default Input;
