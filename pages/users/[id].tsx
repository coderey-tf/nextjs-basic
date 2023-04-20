import Layout from "@/components/Layout";
import { useRouter } from "next/router";

interface userProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface userDetailProps {
  user: userProps;
}

export default function UsersDetail({ user }: userDetailProps) {
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await res.json();

  const paths = usersData.map((user: userProps) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

interface getStatic {
  params: {
    id: number;
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: getStatic) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    // Passed to the page component as props
    props: { user },
  };
}
