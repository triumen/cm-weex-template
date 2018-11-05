<template>
    <div class="second">
        <text>这是第二页</text>
        <text @click="handleClick">点击我返回第一页</text>
    </div>
</template>

<script>
export default {
    created() {
        this.$toast('这是第二页')
    },
    methods: {
        handleClick() {
            this.$router.back();
        }
    }
}
</script>

<style lang="scss">
@import '../common/scss/base.scss';
.second {
    align-items: center;
    justify-content: center;
}
</style>
