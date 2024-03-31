import FormInput from "./FormInput";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sending user details
  const sendInfo = async (data) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://performio-yrd369s-projects.vercel.app/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success === false) {
        setLoading(false);
        setError(result.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

    setError(false);
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
          label="Username"
          id="username"
          name="username"
          type="text"
          placeholder="username"
          required="required"
          register={register("username", {
            required: "username is required ",
            minLength: {
              value: 3,
              message: "username should be more than 2 characters",
            },
          })}
          error={errors.username}
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
        <Button value={loading ? "loading" : "Sign Up"} />
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </form>
    </>
  );
}
export default SignUpForm;
