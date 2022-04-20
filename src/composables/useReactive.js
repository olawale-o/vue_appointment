import { reactive } from 'vue';

export function useReactive(field) {
  const reactiveData = reactive(field);
  return reactiveData;
}