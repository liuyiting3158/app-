<template>
    <!--    顶部标题-->
    <van-nav-bar title="添加交易" left-text="返回" left-arrow
                 @click-left="onClickLeft">
        <template #right>
            <van-icon name="success" size="18" @click="submitDeal" />
        </template>
    </van-nav-bar>
    <!--    金额-->
    <!--    <AddDeal/>-->
    <div class="content">
        <div class="content-left">
            <!-- 可以使用 CellGroup 作为容器 -->
            <van-cell-group inset>
                <van-field
                    v-model="bill.billAmount"
                    label="请输入金额"
                    placeholder="请输入金额"
                />
            </van-cell-group>

        </div>
        <div class="content-right">
            <van-uploader class="camera"
                          :after-read="afterRead"
                          capture="camera"
                          :before-read="beforeRead"
            >
                <van-icon
                    name="photograph"
                    class="v-icon-class"
                />
            </van-uploader>
        </div>

    </div>
    <van-divider/>

    <!--选择分类-->
    <van-tabs v-model:active="active" type="card" class="card">
        <van-tab title="支出">
            请选择分类：
            <Expend/>
        </van-tab>
        <van-tab title="收入">
            请选择分类：
            <InCome/>
        </van-tab>
    </van-tabs>
    <!--    底部 -日期-商家-备注-->
    <div class="bottom">
        <div class="time" @click="showDateWindow">
            <van-cell title="日期：" :value="date" @click="show = true" v-model="bill.billDate" />
        </div>
        <div class="type">
            <div class="text">商家：</div>
            <div class="type-content">
                <input type="text" class="type-content-input" v-model="bill.billShopkeeper" >
            </div>
        </div>
        <div class="type">
            <div class="text">备注：</div>
            <div class="type-content">
                <input type="text" class="type-content-input" v-model="bill.billRemark">
            </div>

        </div>
    </div>
    <!-- 底部弹出日期 -->
    <van-popup
        v-model:show="showDate"
        position="bottom"
        :style="{ height: '50%' }"
        round
    >
        <van-date-picker
            v-model="currentDate"
            title="选择日期"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirmDate"
            @cancel="onCancelDate"

        />
    </van-popup>




</template>

<script>

import AddDeal from "../components/AddDeal.vue";
import Expend from "../components/Expend.vue";
import InCome from "../components/InCome.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

export default {
    name: "Deal",
    components: {
        AddDeal,
        Expend,
        InCome
    },
    data() {
        return {
            active: 0,
            date: '',
            currentDate : ['2021', '01', '01'],
            show: false,
            router: useRouter(),
            bill: {
                billType: 0,
                billCategory: [],
                billAmount: 0,
                billDate: this.date,
                billShopkeeper: "",
                billRemark: "",
            },
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2021, 11, 31),
            showDate: false,

        }
    },
    methods: {
        formatDate(date) {
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(value) {
            this.show = false;
            this.date = this.formatDate(value);
        },
        onClickLeft() {
            this.router.back();
        },
        beforeRead(file) {
            console.log(file);
            //对图片进行裁剪
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const img = new Image();
                    img.src = reader.result;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0, img.width, img.height);
                        canvas.toBlob((blob) => {
                            blob.name = file.name;
                            resolve(blob);
                        }, file.type);
                    };
                };
            });
        },
        afterRead(file) {
            console.log(file);
            // do something with file
        },
        submitDeal(){
            console.log(this.bill);
        },
        showDateWindow(){
            this.showDate = true;
        },
        onConfirmDate(item){
            this.showDate = false;
            console.log(item)
            this.currentDate=item.selectedValues;
            console.log(this.currentDate)
        },
        onCancelDate(){
            this.showDate = false;
        }
    }
}


</script>

<style scoped lang="less">

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;


    .content-left {
        font-size: 30px;
        color: #84B585;
    }

    .content-right {
        font-size: 30px;
        color: #84B585;
        align-self: center;

        .camera {
            width: 50px;
            height: 10px;
            border-radius: 50%;
        }


    }
}


van-tabs {
    .card {
        margin-top: 10px;
        //圆角
        border-radius: 10px;
    }
}

// 底部 -日期-商家-备注开始
.type {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    //下边框
    border-bottom: 1px solid #e5e5e5;
    height: 40px;

    .text {
        line-height: 40px;
        text-align: center;
        margin-left: 17px;
        font-size: 14px;
    }

    .type-content {
        flex: 1;

        .type-content-input {
            width: 90%;
            height: 35px;
            margin-right: 10px;
            font-size: 14px;
            padding-left: 10px;
            border: none;
            //文字右对齐

            text-align: right;
            color: #969799;
        }
    }

}

// 底部 -日期-商家-备注结束

</style>
