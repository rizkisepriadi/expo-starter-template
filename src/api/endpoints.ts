export const API_ENDPOINTS = {
  // Users
  USERS: '/users',
  USER_BY_ID: (id: number) => `/users/${id}`,

  // Posts
  POSTS: '/posts',
  POST_BY_ID: (id: number) => `/posts/${id}`,
  POSTS_BY_USER: (userId: number) => `/users/${userId}/posts`,

  // Comments
  COMMENTS: '/comments',
  COMMENT_BY_ID: (id: number) => `/comments/${id}`,
  COMMENTS_BY_POST: (postId: number) => `/posts/${postId}/comments`,

  // Todos
  TODOS: '/todos',
  TODO_BY_ID: (id: number) => `/todos/${id}`,
  TODOS_BY_USER: (userId: number) => `/users/${userId}/todos`,
} as const;
