const Label = (props) => {
  const { name, classname, Label } = props;
  return (
    <label
      htmlFor={name}
      className={`${classname} block text-sky-700 text-sm font-bold mb-2`}
    >
      {Label}
    </label>
  );
};

export default Label;
