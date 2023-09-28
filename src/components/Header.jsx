import { GiTomato } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-screen/3">
      <div>
        <button>
          <GiTomato className="text-primary hover:text-secondary" size={50} />
        </button>
      </div>
      <div className="text-2xl text-primary">PomotimeBloom</div>
      <div>
        <button>
          <FaGithub className="text-primary hover:text-secondary" size={50} href="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
