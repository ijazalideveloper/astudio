"use client";
import Header from "@/components/common/Layout/Header";
import Layout from "@/components/common/Layout/Layout";
import DataTable from "@/components/ui/DataTable";
import Input from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-3xl font-bold">
            Next.js App with Users and Products
          </h1>
        </div>
      </main>
    </Layout>
  );
}
