import FormLogin from "../component/Fragments/FormLogin";
import AuthLayouts from "../component/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-slate-700 font-bold">
        Belum punya akun?{" "}
        <Link to="/register" className="text-blue-700 font-bold">
          Daftar sekarang
        </Link>
        ! Masukkan email dan kata sandimu untuk masuk ke akun Anda.
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
