import type { Slot, VNodeChild, VNode, PropType } from "vue";
import { defineComponent } from "vue";
import { isFunction } from "lodash-es";

type VueNode = Slot | VNodeChild | VNode;

export const VnodeRender = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function] as PropType<VueNode>,
      required: true,
    },
  },
  setup: (props) => () =>
    isFunction(props.vNode) ? props.vNode() : props.vNode,
});

export * from "./install";
export * from "./getSlot";
export * from "./style";
