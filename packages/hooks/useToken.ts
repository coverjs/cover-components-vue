import type { GlobalToken } from "ant-design-vue/es/theme";

import { theme } from "ant-design-vue";
import { ref } from "vue";

export const useAntdToken = () => {
  const { token: antdToken } = theme.useToken();
  const token = ref<GlobalToken>(antdToken.value);

  return {
    token,
  };
};

export default useAntdToken;
