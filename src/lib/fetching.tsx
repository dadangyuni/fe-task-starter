const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (params: {page: 1, limit: 10}) => {
  const resp = await fetch(`${baseUrl}/posts?page=${params.page}`);
  if (!resp.ok) {
    throw new Error("Failed fetching posts");
  }
  return resp.json();
};

export const fetchPostDetail = async (id: string) => {
  const resp = await fetch(`${baseUrl}/posts/${id}`);
  if (!resp.ok) {
    throw new Error("Failed fetching post detail");
  }
  return resp.json();
};
