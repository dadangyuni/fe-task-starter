"use client";

import { fetchPosts } from "@/lib/fetching";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const PostList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  console.log("data", data);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <ul className="space-y-3">
        {data?.map(
          (post: { title: string; body: string; id: string }, idx: number) => (
            <li key={idx} className="p-2 border border-gray-100 shadow">
              <Link href={`/posts/${post.id}`} className="cursor-pointer">
                <div>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm">{post.body}</p>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PostList;
