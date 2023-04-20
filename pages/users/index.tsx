import Layout from "@/components/Layout";
import { useRouter } from "next/router";

interface usersDataProps {
  usersData: Array<any>;
}

export default function Users({ usersData }: usersDataProps) {
  // const { usersData } = props;
  const router = useRouter();

  console.log(usersData);
  return (
    <Layout pageTitle="Users">
      {/* <p>Users Page</p> */}
      {usersData.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
          className="p-4 shadow-lg w-[400px] rounded-xl m-3 inline-block"
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await res.json();
  return {
    props: {
      usersData,
    }, // will be passed to the page component as props
  };
}
