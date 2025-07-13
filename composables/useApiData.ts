/*
 * initiate the Hook first, then use "fetchData" method to activate fetching.
 * use "data" property for the retrieved data
 */

import axios from "axios";
import { ref } from "vue";

export function useApiData<T = any>(url: string) {
  const data = ref<T | null>(null);
  const error = ref<any>(null);
  const loading = ref(false);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const res = await axios.get(url);
      data.value = res.data;
    } catch (err) {
      console.error("Failed to fetch data", err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, fetchData };
}
