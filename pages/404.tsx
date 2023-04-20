import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center ">
      <h1 className="text-red-700 ">Oooppss...</h1>
      <h2 className="text-gray-500">Halaman yang anda cari tidak ditemukan!</h2>
      <h2 className="text-gray-500 mt-10">Mengembalikan anda ke homepage...</h2>
    </div>
  );
}
