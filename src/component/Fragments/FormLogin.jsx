import Button from "../Element/Button";
import InputForm from "../Element/Input";
const FormLogin = () => {
  return (
    <form action="">
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
      <div className="mb-6">
        <Button variant="bg-blue-700 w-full">Login</Button>
      </div>
    </form>
  );
};

export default FormLogin;
