import { Layout } from 'components';
import dynamic from 'next/dynamic';

const CreatePost = dynamic(() => import('components/CreatePost'), {
  ssr: false,
});

export default function CreatePostPage(): JSX.Element {
  return (
    <Layout.Default title="BH | Створення поста">
      <CreatePost />
    </Layout.Default>
  );
}
