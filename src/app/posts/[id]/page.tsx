import PostDetail from "@/components/PostDetail";
import { fetchPostDetail, fetchPosts } from "@/lib/fetching";
import { getQueryClient } from "@/lib/helpers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Page({ searchParams }: any) {
const filters = (await searchParams).filters
  console.log("searchParams", filters);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts.detail", filters],
    queryFn: () => fetchPostDetail(filters as string),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetail id={filters} />
    </HydrationBoundary>
  );
}
