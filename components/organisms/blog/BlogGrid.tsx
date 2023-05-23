interface BlogGridProps {
  posts: any;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return <div>{JSON.stringify(posts)}</div>;
};
