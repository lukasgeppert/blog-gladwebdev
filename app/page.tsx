import PostPreview from "../components/PostPreview";
import getPostMetadata from "../lib/postMetaData";

function HomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    .map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
      {postPreviews}
    </div>
  );
}

export default HomePage;
