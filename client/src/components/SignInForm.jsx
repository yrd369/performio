import FormInput from "./FormInput";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userslice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "./OAuth";

function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sending user details
  const sendInfo = async (data) => {
    try {
      dispatch(signInStart());
      const response = await fetch("https://performio-yrd369s-projects.vercel.app/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success === false) {
        dispatch(signInFailure(result.message));
        return;
      }
      dispatch(signInSuccess(result));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <>
      <form
        className="bg-white w-96   p-8 rounded-md  space-y-4"
        onSubmit={handleSubmit(sendInfo)}
      >
        <FormInput
          label="Email address"
          id="email"
          name="email"
          type="text"
          placeholder="name@gmail.com"
          required="required"
          register={register("email", {
            required: "Email address is required",
            minLength: {
              value: 3,
              message: "Name should be more than 3 characters",
            },
          })}
          error={errors.email}
        />
        <FormInput
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="password"
          required="required"
          register={register("password", {
            required: "Password is required ",
            minLength: {
              value: 3,
              message: "Password should be more than 6 characters",
            },
          })}
          error={errors.password}
        />
        <div>
          <span className="text-blue-500 text-sm">Forgot password?</span>
        </div>
        <Button value={loading ? "loading" : "Sign in"} />
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </form>
    </>
  );
}
export default SignInForm;
