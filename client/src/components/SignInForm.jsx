import FormInput from "./FormInput";
import Button from "./Button";
import { useForm } from "react-hook-form";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendInfo = (data) => {
    console.log(data);
    alert(`You are successfully logged in !`);
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
        <Button value={"Sign In"}/>
      </form>
    </>
  );
}
export default SignInForm;
