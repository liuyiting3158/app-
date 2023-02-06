<template>
    <van-grid :column-num="3">
        <van-grid-item
            v-for="(item,index) in data"
            :key="index" :icon=item.icon :text=item.text
        />
    </van-grid>

</template>

<script >

export default {
    name: "Expend",
    data() {
        return {
            data: [
                {
                    text: '餐饮',
                    icon: 'food-o'
                },
                {
                    text: '购物',
                    icon: 'shopping-cart-o'
                },
                {
                    text: '运动',
                    icon: 'basketball-o',
                },
                {
                    text: '交通',
                    icon: 'bus-o'
                },
                {
                    text: '通信',
                    icon: 'phone-o'
                },
                {
                    text: '旅行',
                    icon: 'airplay-o'
                },
                {
                    text: '娱乐',
                    //游戏图标
                    icon: 'game-o'
                },
                {
                    text: '学习',
                    icon: 'book-o',
                },
                {
                    text: '自定义',
                    //笔图标
                    icon: 'edit-o'
                }
            ],
        }
    },
    methods: {
        onClickLeft() {
            this.router.back();
        },
    }
}


</script>

<style scoped>

</style>
