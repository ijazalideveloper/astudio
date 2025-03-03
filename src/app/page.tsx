import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold">Next.js App with Users and Products</h1>
        <div className="flex gap-4">
          <Link href="/users" className="btn btn-primary">
            Users Page
          </Link>
          <Link href="/products" className="btn btn-secondary">
            Products Page
          </Link>
        </div>
      </div>
    </main>
  );
}