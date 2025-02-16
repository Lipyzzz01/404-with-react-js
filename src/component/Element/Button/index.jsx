const Button = (props) => {
  const { children = "Default", variant = "bg-red-700" } = props;
  return (
    <button
      type="submit"
      className={`${variant} text-white font-bold px-6 rounded-md h-10`}
    >
      {children}
    </button>
  );
};

export default Button;
