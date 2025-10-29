export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold">
            Welcome to the Frontend Task Application
          </h1>
          <p className="text-lg font-medium">
            This project is pre-setup with TypeScript, Tailwind CSS, and
            TanStack Query.
          </p>
        </div>
      </div>
    </div>
  );
}
