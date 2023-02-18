<template>
    <div class="table-box">
        <van-row class="th-row">
            <van-button
                v-for="item in icons"
                :key="item.text" :icon=item.icon :text=item.text
                :class="{active:active===item.text}"
                @click="selected(item.text)">{{ item.text }}</van-button>
        </van-row>
    </div>
</template>

<script>

export default {
    name: "Expend",
    data() {
        return {
            icons: [
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
            active:''
        }
    },
    methods: {
        onClickLeft() {
            this.router.back();
        },
        selected(text){
            this.active=text;
        }
    }
}


</script>

<style scoped>
.active{
    background-color: #1989fa;
    border:1px solid #1989fa;
    color: #fff;
}
</style>
