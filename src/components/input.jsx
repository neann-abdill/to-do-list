function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <>
      <h3>{label}</h3>
      {type === "textarea" ? (
        <textarea
          className="
            mt-3
            px-4
            py-3
            rounded-xl
            bg-[#111827]
            border
            border-gray-700
            text-white
            placeholder:text-gray-400
            shadow-lg
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
            focus:outline-none
            resize-none
            h-24
          "
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="
            mt-3
            px-4
            py-3
            rounded-xl
            bg-[#111827]
            border
            border-gray-700
            text-white
            placeholder:text-gray-400
            shadow-lg
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
            focus:outline-none"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </>
  );
}

export default Input;