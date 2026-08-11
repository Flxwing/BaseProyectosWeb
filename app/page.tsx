import UsersLists from "@/app/features/usersLists/UsersLists";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start gap-8 py-16 px-6 bg-white dark:bg-black sm:items-start">
        <UsersLists />
      </main>
    </div>
  );
}
