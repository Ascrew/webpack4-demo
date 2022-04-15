<template>
  <div>
    <div class="home-box">
      <div
        class="box"
        v-for="(item, index) in boxList"
        :key="item.boxName + index"
      >
        <div class="red box__name">{{ item.boxName }}</div>
        <div class="box__content">{{ item.content }}</div>
        <div class="global-css">aaa</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRed: true,
      boxList: [
        {
          boxName: "box",
          content: "this is a box",
        },
        {
          boxName: "box",
          content: "this is a box",
        },
        {
          boxName: "box",
          content: "this is a box",
        },
        {
          boxName: "box",
          content: "this is a box",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
$color-pink: pink;

.home-box {
  box-sizing: border-box;
  border: 1px solid #000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .box {
    border: 1px solid #000;
    flex: 1;
    flex: 0 1 30%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .red {
      color: red;
    }
    .box__content {
      color: $test2;
    } 
    // &:last-child {
    //   @include big-font
    // }
  }
}
</style>
