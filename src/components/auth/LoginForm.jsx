import { useFormAuth } from "../../hooks/useFormAuth";

export const LoginForm = () => {
  const { email, password, onInputChange } = useFormAuth({
    email: "homerojose69@gmail.com",
    password: "123456",
  });

  return (
    <section className="w-11/12 sm:w-[400px]  bg-white py-8 px-8">
      <h1 className="text-3xl font-semibold ">Login</h1>
      <p className="text-sm w-full inline-block ">Create users in this web</p>
      <button className="mt-3 mx-auto py-1 flex w-full items-center text-sm justify-center gap-3 border-[1px] border-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        Sign in with Google
      </button>
      <div className="text-sm w-full flex items-center justify-center mt-5 gap-3">
        <hr className="w-full" /> <p className="w-full text-center">or Sign in with Email</p>
        <hr className="w-full" />
      </div>
      <form>
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="w-full py-1 px-2 border-[1px] border-gray-300"
          value={email}
          onChange={onInputChange}
        />
        <label htmlFor="email" className="block my-2 font-semibold">
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="1234"
          className="w-full py-1 px-2 border-[1px] border-gray-300"
          value={password}
          onChange={onInputChange}
        />
        <input type="submit" className="w-full mt-4 bg-gray-800 text-white py-2 cursor-pointer" value="Login" />
        <div className="flex justify-between">
          <a href="#" className="text-blue-600 text-xs mt-5 inline-block">
            Create a account
          </a>
          <a href="#" className="text-blue-600 text-xs mt-5 inline-block">
            Forgot password?
          </a>
        </div>
      </form>
    </section>
  );
};
