<template></template>

<script>
export default {
  onLoad() {
    // 扫码
    this.scanCode();
  },
  methods: {
    scanCode() {
      uni
        .scanCode({
          onlyFromCamera: true,
        })
        .then((res) => {
          this.result = res.result;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
