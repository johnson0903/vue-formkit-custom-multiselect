<template>
  <VueMultiselect
    v-model="value"
    :options="props.context.options"
    :placeholder="props.context.placeholder"
  ></VueMultiselect>
</template>
<script>
import VueMultiselect from "vue-multiselect";
import { ref, watch } from "vue";

export default {
  components: {
    VueMultiselect,
  },
  props: {
    context: Object,
  },
  setup(props) {
    const value = ref(null);

    watch(value, () => {
      props.context.node.input(value.value);
    });

    return { value, props };
  },
};
</script>