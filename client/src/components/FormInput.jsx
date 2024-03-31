
const FormInput = ({
    label,
    id,
    name,
    type,
    placeholder,
    required,
    register,
    error,
  }) => {
    return (
      <div>
        <label className="block  mb-2 text-black font-semibold" htmlFor={id}>
          {label}
        </label>
        <input
          className= {`px-3 py-2  w-full rounded-md outline-none bg-gray-200 text-sm ${error ? "border border-red-500":"border border-gray-300"}`}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          // required={required}
          {...register}
        />
        {error && <small className="text-red-500  font-medium">{error.message}</small>}
      </div>
    );
  };
  export default FormInput;