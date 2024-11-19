<script setup lang="ts">
import type {
  PageContainerProps,
  PageContainerEmits,
  PageContainerSlots,
} from "./types";
import PageHeader from "./PageHeader.vue";
import TabList from "./TabList.vue";
import { getStyle } from "./style";
import { VnodeRender } from "@cover-components-vue/utils";
import { useAntdToken } from "@cover-components-vue/hooks";
import useConfigInject from "ant-design-vue/es/config-provider/hooks/useConfigInject";

defineOptions({ name: "PageContainer" });

defineEmits<PageContainerEmits>();
defineSlots<PageContainerSlots>();

const props = defineProps<PageContainerProps>();

const { prefixCls } = useConfigInject("page", props);
const { token } = useAntdToken();
</script>

<template>
  <div :class="prefixCls" class="page-container">
    <div
      :class="`${prefixCls}-container-header`"
      :style="getStyle(token, 'container-header')"
    >
      <page-header v-if="header" v-bind="header">
        <slot name="header" v-if="$slots?.header"></slot>
        <template #extra>
          <slot v-if="$slots?.headerExtra" name="headerExtra"></slot>
        </template>
      </page-header>
      <tab-list
        v-if="tablist?.length"
        @t-change="(k) => $emit('tabChange', k)"
        v-bind="$props"
      >
        <template #extra>
          <slot v-if="$slots?.tabBarExtra" name="tabBarExtra"></slot>
        </template>
      </tab-list>
    </div>
    <div
      :class="`${prefixCls}-content`"
      :style="getStyle(token, 'container-content')"
    >
      <vnode-render v-if="content" :v-node="content" />
      <slot v-else></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-container {
  .cover-tabs-nav {
    margin-bottom: 0;
  }
}
</style>
