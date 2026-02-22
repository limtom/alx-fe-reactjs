import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";

// API function to fetch posts
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const PostsComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const queryClient = useQueryClient();

  // Basic useQuery for fetching posts
  const {
    data: posts,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading posts...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
        <p className="font-bold">Error loading posts!</p>
        <p className="text-sm">{error.message}</p>
        <button
          onClick={() => refetch()}
          className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div
            className={`w-3 h-3 rounded-full ${isFetching ? "bg-yellow-500 animate-pulse" : "bg-green-500"}`}
          ></div>
          <span className="text-sm text-gray-600">
            {isFetching ? "Updating..." : "Posts loaded"}
          </span>
          <span className="text-sm text-gray-500">({posts?.length} posts)</span>
        </div>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className={`px-4 py-2 rounded text-white text-sm ${
            isFetching
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          {isFetching ? "Refetching..." : "Refetch Posts"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.slice(0, 6).map(
          (
            post, // Show first 6 posts
          ) => (
            <div
              key={post.id}
              className={`bg-white rounded-lg shadow p-4 cursor-pointer transition ${
                selectedPost === post.id
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : "hover:shadow-md hover:bg-gray-50"
              }`}
              onClick={() =>
                setSelectedPost(post.id === selectedPost ? null : post.id)
              }
            >
              <h3 className="font-semibold text-lg mb-2 capitalize">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {post.body.substring(0, 100)}...
              </p>
              <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                <span>Post #{post.id}</span>
                {queryClient.getQueryData(["post", post.id]) && (
                  <span className="text-green-500" title="Cached">
                    📦
                  </span>
                )}
              </div>
            </div>
          ),
        )}
      </div>

      {selectedPost && <PostDetails postId={selectedPost} />}
    </div>
  );
};

// Separate component for post details with its own query
const PostDetails = ({ postId }) => {
  const fetchPostDetails = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    const data = await res.json();
    return data;
  };

  const {
    data: post,
    isLoading,
    error,
  } = useQuery(["post", postId], fetchPostDetails);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 mt-4 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4">
        Error loading post details
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-4 border-t-4 border-blue-500">
      <h2 className="text-xl font-bold mb-4">Post Details</h2>
      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-500">Title</label>
          <p className="font-medium">{post.title}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Content</label>
          <p className="text-gray-700">{post.body}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-400 pt-2 border-t">
          <span>Post ID: {post.id}</span>
          <span>User ID: {post.userId}</span>
        </div>
        <div className="text-xs text-green-600 mt-2">
          ✅ Data from cache: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PostsComponent;
