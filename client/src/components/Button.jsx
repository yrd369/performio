const Button = ({value}) => {
    return (
      <button className=" py-2 bg-indigo-700 text-white w-full rounded-md text-center font-bold text-sm hover:bg-indigo-500 hover:text-gray-50">
        {value}
      </button>
    );
  };
  export default Button;