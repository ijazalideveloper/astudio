import Layout from "@/components/common/Layout/Layout";
import Link from "next/link";
import { fetchUsers } from "@/services/usersService";
import { fetchProducts } from "@/services/productsService";

export default async function Home() {
  // Fetch users on the server side
  const { total: userTotal } = await fetchUsers(0, 1);
  const { total: productsTotal } = await fetchProducts(0, 1);

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Next.js App with Users and Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[15px]">
          <div className="filters-container flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">Total Users</h2>
            <p className="text-5xl font-bold mb-4">{userTotal}</p>
            <Link
              href="/users"
              className="px-6 py-3 bg-custom-black text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Users Page
            </Link>
          </div>
          <div className="filters-container flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">Total Products</h2>
            <p className="text-5xl font-bold mb-4">{productsTotal}</p>
            <Link
              href="/products"
              className="px-6 py-3 bg-custom-yellow text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Products Page
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
