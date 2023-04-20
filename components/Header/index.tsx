import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-xl p-5 mb-5">
      <ul className="list-none flex justify-end text-lg">
        <li className="mx-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="mx-4">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
}
