import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER } from "../Redux/actions";
import { Register } from "../API/auth";

export default function Signup() {
  const [error, setError] = useState(null);

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const logup = useSelector((state) => state.LOGUP);
  console.log(logup);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (
      emailValue.trim() !== "" &&
      passwordValue.trim() !== "" &&
      nameValue.trim() !== ""
    ) {
      dispatch(REGISTER(nameValue, emailValue, passwordValue, true));
      Register(nameValue, emailValue, passwordValue);
      setError('* all fields are not complete !')
      console.log('inputs are not complete !')
    } else {
      setError('* name and email and password are required!');
      console.log('name and email and password are required!')
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[82vh] flex flex-col justify-center items-center"
    >
      <div className="lg:w-6/12 w-11/12 p-2 text-gray-500 flex justify-center items-center font-light mb-3 border-b-2 border-gray-200">
        {" "}
        SIGN UP
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
      <div className="bg-blue-100 shadow-xl lg:w-6/12 w-11/12 p-6 rounded-md flex flex-col justify-center items-center">
        <div className="w-10/12 flex justify-between items-center mb-3">
          <label className="font-thin" htmlFor="name">
            name :
          </label>
          <input
            className="w-8/12 p-1 outline-blue-200"
            name="name"
            type="name"
            ref={name}
          />
        </div>
        <div className="w-10/12 flex justify-between items-center mb-3">
          <label className="font-thin" htmlFor="email">
            email :{" "}
          </label>
          <input
            className="w-8/12 p-1 outline-blue-200"
            ref={email}
            name="email"
            type="email"
          />
        </div>
        <div className="w-10/12 flex justify-between items-center mb-3">
          <label className="font-thin" htmlFor="password">
            password :
          </label>
          <input
            className="w-8/12 p-1 outline-blue-200"
            ref={password}
            name="password"
            type="password"
          />
        </div>
        <div className=" w-10/12 text-start">
          <span className="text-red-400 text-sm">{error} </span>
        </div>
        <div className="w-10/12 flex justify-between items-center mt-4 ">
          <button
            className="border bg-blue-400 px-4 py-2 rounded-sm text-white font-medium"
            type="submit"
          >
            Submit
          </button>
          {/* <button id="login"  onClick={handleSubmit}  className="border bg-blue-400 px-4 py-2 rounded-sm cursor-pointer text-white font-medium" type="submit">Submit</button> */}
        </div>
      </div>
    </form>
  );
}
