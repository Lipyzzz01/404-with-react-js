import { Link } from "react-router-dom";
import FormRegister from "../component/Fragments/FormRegister";
import AuthLayouts from "../component/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="font-medium text-slate-700 font-bold">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-blue-700 font-bold">
          Login sekarang
        </Link>
        ! Masukkan email dan kata sandimu untuk masuk ke akun Anda.
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
