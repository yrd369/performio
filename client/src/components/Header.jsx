import { Navbar, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar className="rounded font-poppins">
      <Link to={"/sign-in"}>
        {currentUser ? (
          <img
            src={currentUser.avatar}
            alt="profile"
            className="w-20 rounded-full object-cover"
          />
        ) : (
          <Button className="bg-[#6875F5]">Sign in</Button>
        )}
      </Link>
    </Navbar>
  );
};

export default Header;
