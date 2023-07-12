"use client";
import Image from "next/image";
import AuthForm from "./components/AuthForm/AuthForm";

const Home = () => {
  return (
    <div
      className="flex h-full  min-h-full items-center justify-center bg-gray-200   sm:px-6 lg:px-8 py-12
    "
    >
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height={48}
          width={48}
          src={"/facebook-messenger.png"}
          alt="logo"
          className=" mx-auto w-auto"
        />
        <h3 className="text-center text-gray-900 text-3xl capitalize mt-10 font-bold tracking-tight">
          Sign in your account
        </h3>
        <AuthForm />
      </div>
    </div>
  );
};
export default Home;
