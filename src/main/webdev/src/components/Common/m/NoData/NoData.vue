<template>
  <div class="customer-no-data">
    <div @click="click">
        <img class="nodata-img" src="@/assets/17.png">
        <div v-if="title" class="nodata-title">{{title}}</div>
        <div v-if="text" class="nodata-text">{{text}}</div>
    </div>
    <div v-if="btnText"  style="text-align: center; padding-top: 26px;">
        <div class="nodata-btn" @click="btnClick">
            <span class="nodata-btnText">{{btnText}}</span>
        </div>
    </div>
  </div> 
</template>

<script>
export default {
    name: "customer-no-data",
    props: {
        title: {
            type: String,
            default: '搜索暂无结果'
        },
        text: {
            type: String,
            default: ''
        },
        btnText: {
            type: String,
            default: ''
        },
        type: {
            type: [Number,String,Object],
            default: 17
        }
    },
    data() {
        return {
            showCloseBtn: false, //是否显示关闭
        }
    },
    methods:{
        click(){
            this.$emit('click');
        },
        btnClick(){
            this.$emit('btnClick');
        },
    }
    
}
</script>

<style lang="less">
    .customer-no-data{
        height: 100%;
        width: 100%;
        position: relative;
        .nodata-img{
            position: relative;
            height: 120px;
            width: 120px;
            margin: 0 auto;
            display: block;
        }
        .nodata-title{
            font-family: PingFangSC-Medium;
            font-size: 17px;
            color: #222222;
            letter-spacing: 0;
            text-align: center;
        }
        .nodata-text{
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #4A4A4A;
            letter-spacing: 0;
            text-align: center;
        }
        .nodata-btn{
            border: 1px solid #C5C5C5;
            padding: 8px 17px 7px;
            display: inline-block;
            .nodata-btnText{
                font-family: PingFangSC-Medium;
                font-size: 15px;
                color: #222222;
                letter-spacing: 0;
                text-align: center;
            }
        }
    }
</style>


