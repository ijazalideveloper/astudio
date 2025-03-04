import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Astudio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/users" className="text-white hover:text-gray-200">
                Users Page
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white hover:text-gray-200">
                Products Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
