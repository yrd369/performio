import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const TheNavbar = () => {
  return (
    <Navbar className="font-poppins text-xl font-semibold border-b-2">
      <Link to={"/"}> Performio </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Link to={"/sign-in"}>
      <Button gradientDuoTone={"purpleToBlue"} outline>Sign In</Button>
      </Link>
    </Navbar>
  );
};
export default TheNavbar;
