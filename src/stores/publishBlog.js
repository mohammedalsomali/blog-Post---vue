
import { ref, computed } from 'vue'

export const blogs = [];
export const createNewBlog = (subject, body) => {
    console.log(blogs);
  return blogs.push({subject, body});
}