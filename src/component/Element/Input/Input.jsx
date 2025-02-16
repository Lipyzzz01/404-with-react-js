const Input = (props) => {
  const { placeholder, classname, name, type } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`${classname} text-sm border rounded-md w-full py-2 px-3 text-slate-700 placeholder:text-slate-400 opacity-50`}
    />
  );
};

export default Input;
