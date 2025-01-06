import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-customColor text-center text-2xl font-bold">
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
