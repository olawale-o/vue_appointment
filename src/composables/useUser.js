import { reactive } from 'vue';

export function useUser(field) {
  const user = reactive(field);
  return user;
}