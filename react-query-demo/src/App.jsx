import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-8 px-4 text-center shadow-lg">
          <h1 className="text-3xl font-bold">React Query Demo</h1>
          <p className="text-blue-100 mt-2">
            Fetching posts from JSONPlaceholder
          </p>
        </header>
        <main className="container mx-auto px-4 py-8">
          <PostsComponent />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
