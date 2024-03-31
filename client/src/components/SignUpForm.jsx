import FormInput from "./FormInput";
import Button from "./Button";
import { useForm } from "react-hook-form";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendInfo = async (data) => {
    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
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
        <Button value={"Sign Up"} />
      </form>
    </>
  );
}
export default SignUpForm;
