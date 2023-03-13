interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  image: string;
  author: string;
  authorImage: string;
  categories: string[];
}

interface Props {
  posts: PostMetadata[];
}
