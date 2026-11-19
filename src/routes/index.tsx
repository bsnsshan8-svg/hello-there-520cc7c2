import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hello world
        </h1>
      </div>
    </main>
  );
}
