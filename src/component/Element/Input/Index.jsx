import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { Label, name, type, placeholder, classname } = props;
  return (
    <div className={`mb-6 ${classname}`}>
      <Label htmlFor={name}>{Label}</Label>
      <Input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
