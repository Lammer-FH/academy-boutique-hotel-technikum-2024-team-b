<script>
export default {
  name: "AppModal",

  props: {
    modelValue: Boolean,
    message: String,

  },

  computed: {
    isVisible: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value); // Sync with parent
      },
    },
  },

}
</script>


<template>
  <div>
    <b-modal v-model="isVisible">{{ message }}

    </b-modal>
  </div>
  <b-button @click="changeVisibilityCollapse" class="m-5">Verfügbarkeit prüfen</b-button>

</template>


<style scoped>

</style>