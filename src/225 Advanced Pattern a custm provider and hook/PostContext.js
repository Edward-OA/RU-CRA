import { createContext, useContext, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState('');

  const archiveOptions = useMemo(() => {
    return {
      show: false,
      title: `Post archive in addition to ${posts.length} main posts`,
    };
  }, [posts.length]);
  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
        archiveOptions,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error('PostContext was used outside of the post provider');
  return context;
}
export { PostProvider, usePosts };
