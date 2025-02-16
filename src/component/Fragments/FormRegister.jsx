import Button from "../Element/Button";
import InputForm from "../Element/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        Label="Fullname"
        name="fullname"
        type="text"
        placeholder="insert full name here..."
      />
      <InputForm
        Label="Email"
        name="email"
        type="email"
        placeholder="exmple@.com"
      />
      <InputForm
        name="password"
        type="password"
        placeholder="******"
        Label="Password"
      />

      <InputForm
        name="confirm Password"
        type="password"
        placeholder="******"
        Label="ConfirmPassword"
      />
      <div className="mb-6">
        <Button variant="bg-blue-700 w-full">Register</Button>
      </div>
    </form>
  );
};

export default FormRegister;
