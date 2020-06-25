<template>
  <div class="alert alert-dismissible fade show col-12 col-md-10 col-xl-8"
       :class="['alert-' + type]" role="alert">
    <slot></slot>
    <button type="button" ref="btn" class="close" data-dismiss="alert"
            aria-label="Close" v-show="close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
// Alert component, works with App.vue, use $emit('alert', 'Something Happened') to alert
export default {
  name: 'alert',
  props: {
    dismiss: {
      type: Number,
      default: 5,
      validator: v => v >= 0
    },
    type: {
      type: String,
      default: 'danger',
      validator: v => ['primary', 'secondary', 'success',
        'danger', 'warning', 'info', 'light', 'dark'].indexOf(v) !== -1
    },
    close: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    if (this.dismiss) {
      setTimeout(() => {
        this.$refs.btn.click()
      }, this.dismiss * 1000)
    }
  }
}
</script>

<style scoped>

</style>
