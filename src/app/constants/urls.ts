const API = 'https://jsonplaceholder.typicode.com';

const users = `${API}/users`;

const posts = `${API}/posts`;

const urls = {
  users: {
    base:users,
    byId:(id:number):string => `${users}/${id}`
  },
  posts: {
    base: posts,
    byId:(id:number):string=> `${posts}/${id}`
  }
}

export {
  urls
}
