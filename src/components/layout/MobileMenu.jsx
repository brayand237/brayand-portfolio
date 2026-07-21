import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { navigation } from "../../constants/navigation";

function MobileMenu({ open, setOpen }) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden">

      <div className="flex justify-between items-center h-20 px-8 border-b">

        <h2 className="text-2xl font-bold text-blue-600">
          Brayand
        </h2>

        <button onClick={() => setOpen(false)}>
          <X size={30} />
        </button>

      </div>

      <nav className="mt-10">

        <ul className="flex flex-col items-center gap-8">

          {navigation.map((item) => (

            <li key={item.id}>

              <Link
                to={item.href}
                onClick={() => setOpen(false)}
                className="text-xl font-semibold hover:text-blue-600"
              >
                {item.name}
              </Link>

            </li>

          ))}

        </ul>

      </nav>

    </div>
  );
}

export default MobileMenu;