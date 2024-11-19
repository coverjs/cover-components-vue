import { defineComponent, type PropType } from "vue";
import { isFunction } from "lodash-es";
import type { VueNode } from "../types";

export const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object, Function] as PropType<VueNode>,
      required: true,
    },
  },
  setup: (props) => () =>
    isFunction(props.vNode) ? props.vNode() : props.vNode,
});
