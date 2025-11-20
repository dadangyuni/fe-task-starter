"use client";

import { fetchPostDetail } from "@/lib/fetching";
import { useQuery } from "@tanstack/react-query";

const PostDetail = ({ id }: { id: string }) => {
  console.log("id", id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts.detail", id],
    queryFn: () => fetchPostDetail(id),
  });

  console.log("data", data);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <div>post</div>;
};

export default PostDetail;
