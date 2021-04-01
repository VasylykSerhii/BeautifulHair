import Layout from "components/Layout";
import dynamic from "next/dynamic";

const CreatePost = dynamic(() => import("components/CreatePost"), {
  ssr: false,
});

export default function CreatePostPage(): JSX.Element {
  return (
    <Layout title="BH | Створення поста">
      <CreatePost />
    </Layout>
  );
}
