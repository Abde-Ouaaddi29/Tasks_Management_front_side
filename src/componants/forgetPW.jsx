import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FORGETPASSOWRD } from "../Redux/actions";

export default function ForgetPW() {
  const email = useRef();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const emailValue = email.current.value;
    dispatch(FORGETPASSOWRD(emailValue));
  };

  return (
    <>
      <div className="w-full h-[82vh] flex flex-col justify-center items-center ">
        <div className=" w-5/12 p-2 text-gray-500 flex justify-center items-center font-light mb-3 border-b-2 border-gray-200">
          {" "}
          Confirmation
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="gray"
            className="w-6 h-6 ms-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className="bg-blue-100 shadow-xl w-5/12 p-6 rounded-md flex flex-col justify-center items-center">
          <div className="w-10/12 flex justify-around items-center mb-3">
            <label className="text-xl font-thin" htmlFor="name">
              email :{" "}
            </label>
            <input
              className="w-8/12 p-2 outline-blue-200  border-2"
              name="email"
              type="email"
              ref={email}
            />
          </div>
          <div className="w-9/12 flex justify-end items-center mt-6 ">
            <button
              onClick={handleSubmit}
              className="border bg-blue-400 px-4 py-2 rounded-sm text-white font-medium"
              type="submit"
            >
              <Link to={"/todos"}>Get Code</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
