import { useEffect } from "react";

const useApi = (apiFunc, id = null) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await apiFunc(id);
      } catch (e) {
        console.log(e); // ์๋ฌ ์กฐํ
      }
    };
    fn();
  }, [apiFunc, id]);
};

export default useApi;