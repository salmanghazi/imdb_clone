import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="trending" />
      <NavbarItem title="Top Rated" param="topRated" />
    </div>
  );
}