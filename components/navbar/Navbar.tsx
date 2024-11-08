"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: "Components",
    path: "/component",
  },

  {
    name: "Showcase",
    path: "#",
  },

  {
    name: "About",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full overflow-hidden z-50 bg-transparent bg-opacity-40 backdrop-blur-sm bg-white transition-all duration-300">
      <div className="flex justify-between items-center h-[80px] px-8">
        <a href="/" className="text-4xl font-semibold text-white-a12 max-w-screen-xl hover:text-white-a12">Aura.ui</a>

        <div className="flex space-x-8 items-center">
          {routes.map((item, index) => (
            <a
              href={item.path}
              key={`${item.path}-${index}`}
              className="text-xl font-light text-white hover:opacity-50 transition-all duration-200 ease-in"
            >{item.name}</a>
          ))}

          <a href="https://github.com/rainasaxena/Aura.ui" target="_blank"><GitHubLogoIcon className="h-8 w-8"/></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
