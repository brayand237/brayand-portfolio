import { Link } from "react-router-dom";
import { navigation } from "../../constants/navigation";

function DesktopMenu() {
  return (
    <nav className="hidden lg:block">

      <ul className="flex items-center gap-8">

        {navigation.map((item) => (

          <li key={item.id}>

            <Link
              to={item.href}
              className="relative font-medium text-gray-700 transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>

          </li>

        ))}

      </ul>

    </nav>
  );
}

export default DesktopMenu;