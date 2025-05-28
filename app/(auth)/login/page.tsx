import Btn from "@/components/Btn";
import React from "react";

const Login = () => {
  const baseStyles =
    "border border-white/20 px-6 py-3.5 outline-0 font-open-Sans placeholder:capitalize placeholder:text-white placeholder:font-thin text-sm placeholder:tracking-wider w-full";

  return (
    <div className="backdrop-blur-xl bg-[#0E0A17]/60 rounded-2xl px-5 md:px-10 py-10 shadow space-y-10 max-w-lg">
      <div className="text-center space-y-1">
        <h1 className="text-white text-xl font-normal tracking-wide font-poppins capitalize">
          welcome admin
        </h1>
        <p className=" text-foreground font-open-Sans capitalize font-thin text-sm tracking-wider">
          log into your account
        </p>
      </div>
      <form className="space-y-4">
        <input
          type="text"
          className={baseStyles}
          placeholder="enter your email"
        />
        <input
          type="text"
          className={baseStyles}
          placeholder="enter your password"
        />
        <Btn type="button" className="w-full text-center">
          log in
        </Btn>
      </form>
    </div>
  );
};

export default Login;
