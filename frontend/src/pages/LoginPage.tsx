import React from "react";
import Login from "../components/Login";

function LoginPage(): JSX.Element {
  return (
    <>
      <section className="pt-20 pb-32 bg-white overflow-hidden">
        <div className="flex flex-wrap items-center -m-6">
          <div className="w-full md:w-1/2 p-6">
            <div className="bg-gradient-cyan2 p-1 mx-auto max-w-max overflow-hidden rounded-full">
              <img
                className="object-cover rounded-full"
                src="https://cdn.pixabay.com/photo/2016/11/08/05/32/rice-1807547_1280.jpg"
              />
            </div>
          </div>
          <Login />
        </div>
      </section>
    </>
  );
}

export default LoginPage;
