import { Checkout } from "@/components/checkout";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <div className="m-auto w-full max-w-lg p-5 rounded-md bg-neutral-100">
        <Checkout />
      </div>
    </main>
  );
}
