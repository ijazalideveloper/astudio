import Layout from "@/components/common/Layout/Layout";
import Link from "next/link";

export default function Home() {

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Next.js App with Users and Products
        </h1>
        <div className="flex gap-6">
          <Link
            href="/users"
            className="px-6 py-3 bg-custom-black text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Users Page
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 bg-custom-yellow text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Products Page
          </Link>
        </div>
      </div>
    </Layout>
  );
}
