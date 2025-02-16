import { Children } from "react";
import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-700 font-bold mb-8 text-xl">{title}</h1>
        <p className="font-medium text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          libero.
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
