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
                    text: '工资',
                    icon:'money-o'
                },
                {
                    text: '奖金',
                    icon: 'prize-o'
                },
                {
                    text: '兼职',
                    icon: 'bag-o',
                },
                {
                    text: '理财',
                    icon: 'moneybag-o'
                },
                {
                    text: '其他',
                    icon: 'question-o'
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
