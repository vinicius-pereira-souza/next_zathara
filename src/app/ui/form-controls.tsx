interface Props {
  type: "email" | "password";
  name: string;
  textLabel: string;
  placeholder: string;
}

export function Input({ type, name, textLabel, placeholder }: Props) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-900 text-sm mb-1 font-medium"
      >
        {textLabel}
      </label>
      <input
        className="input-box"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export function ButtonSubmit({ text }: { text: string }) {
  return (
    <>
      <button
        type="submit"
        className="block w-full p-4 rounded-md text-center text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all"
      >
        {text}
      </button>
    </>
  );
}

export function ButtonGoogleSign() {
  return (
    <>
      <button
        className="input-box hover:bg-gray-100 transition-all"
        type="button"
      >
        Sign up with Google
      </button>
    </>
  );
}
