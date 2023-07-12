"use client";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Button from "@/app/components/button/Button";
import Input from "@/app/components/inputs/Input";

import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "../AuthSocialButton/AuthSocialButton";
type variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<variant>("LOGIN");
  const [isloading, setIsloading] = useState(false);
  const toggleVerant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);

    if (variant === "REGISTER") {
      // Axios Register
    }
    if (variant === "LOGIN") {
      // NextAuth SingIn
    }
  };

  const socialAction = (action: string) => {
    setIsloading(true);
    // next social login
  };
  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
       bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10"
      >
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              register={register}
              id="name"
              label="Name"
              type="text"
              errors={errors}
            />
          )}
          <Input
            register={register}
            id="email"
            label="Email address"
            type="email"
            errors={errors}
          />
          <Input
            register={register}
            id="password"
            label="Password"
            type="password"
            errors={errors}
          />
          <div className="">
            <Button disabled={isloading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sing in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className=" relative">
            <div
              className="
             absolute inset-0 flex items-center
            "
            >
              <div className=" w-full border-t border-gray-300" />
            </div>
            <div className=" relative justify-center flex text-sm ">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className=" mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger ?"
              : "Already have an account ? "}
          </div>
          <div onClick={toggleVerant} className=" underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
