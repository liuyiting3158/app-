<template>
    <van-grid :column-num="3">
        <van-grid-item
            v-for="(item,index) in data"
            :key="index" :icon=item.icon :text=item.text
        />
    </van-grid>

</template>

<script setup>

const data = [
    {
        text: '工资',
        icon: 'home-o'
    },
    {
        text: '红包',
        icon: 'search-o'
    },
    {
        text: '租金',
        icon: 'friends-o'
    },
    {
        text: '分红',
        icon: 'chat-o'
    },
    {
        text: '理财',
        icon: 'cart-o'
    },
    {
        text: '其他',
        icon: 'photo-o'
    },
    {
        text: '借入',
        icon: 'photo-o'

    },
    {
        text: '收款',
        icon: 'photo-o'
    },
    {
        text: '设置',
        icon: 'photo-o'
    }


]

</script>

<style scoped>

</style>
