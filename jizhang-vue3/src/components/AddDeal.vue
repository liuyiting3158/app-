<template>
    <div class="content">
        <div class="content-left">
            <!-- 可以使用 CellGroup 作为容器 -->
            <van-cell-group inset>
                <van-field
                    v-model="value"
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

</template>

<script >

import {reactive, ref} from "vue";
export default {
    name: "AddDeal",
    data() {
        return {
            value: 0,
        }
    },
    methods: {
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

</style>
