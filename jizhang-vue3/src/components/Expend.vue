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
                    text: '出行',
                    icon: 'car-o'
                },
                {
                    text: '日用品',
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
                    text: '其他',
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
