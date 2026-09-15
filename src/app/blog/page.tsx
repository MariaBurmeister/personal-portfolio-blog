import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing and notes — coming soon.",
  robots: { index: false, follow: false },
};

const Blog = () => {
  return (
    <div className="flex h-full items-center justify-center font-rubikMono">
      Coming Soon
    </div>
  );
};

export default Blog;
