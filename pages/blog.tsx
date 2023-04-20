import Layout from "@/components/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface blogProps {
  dataBlog: Post[];
}

export default function blog({ dataBlog }: blogProps) {
  return (
    <Layout pageTitle="Blog">
      {dataBlog.map((data) => (
        <div
          key={data.id}
          className="p-4 shadow-lg w-[400px] rounded-xl m-3 inline-block"
        >
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    }, // will be passed to the page component as props
  };
}
