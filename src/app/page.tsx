"use client";
import Layout from "@/components/common/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-bold">
          Next.js App with Users and Products
        </h1>
      </div>
    </Layout>
  );
}
