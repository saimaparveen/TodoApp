import { ref, watch } from "vue";

export function useLocalStorage(key, initialValue, type) {
  const storedValue =
    type === "string"
      ? localStorage.getItem(key)
      : JSON.parse(localStorage.getItem(key));
  const data = ref(storedValue !== null ? storedValue : initialValue);
  console.log("data", data);
  watch(
    data,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    { deep: true }
  );

  return data;
}
