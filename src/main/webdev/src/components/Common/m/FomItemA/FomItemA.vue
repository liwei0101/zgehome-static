<template>
    <div class="customer-form-itemA" @click="getClick()">
        <div v-show="imgSrc" class="itemA-left">
            <img :style="'border-radius:'+(round?'50%':'0px')+';'"  class="itemA-img" :src="imgSrc" />
        </div>
        <div :class="showLine?'itemA-right hairline-bottom':'itemA-right'">
            <div class="itemA-content">
                <div class="itemA-titles">
                    <span class="itemA-title">
                        {{title}}
                    </span>
                    <span v-show="titleSign" class="itemA-sign">
                        {{titleSign}}
                    </span>
                </div>
                <div class="itemA-sub-title">
                    {{subTitle}}
                </div>
            </div>
             <div class="itemA-icon" v-if="iconType" :style="singleTitle?'line-height:50px':'line-height:26px;'">
                <!--<van-icon class="itemA-type" style="font-size: 20px;color: rgb(193,193,193);" :type="iconType" />-->
                 <van-icon class-prefix="van-icon van-icon-arrow" class="vanIcon"></van-icon>
            </div>
        </div>
    </div> 
</template>

<script>
    export default {
        name: "customer-form-itemA",
        props: {
            title: {
                type: String,
                default: ''
            },
            titleSign: {
                type: String,
                default: ''
            },
            subTitle: {
                type: String,
                default: ''
            },
            imgSrc: {
                type: String,
                default: ''
            },
            labelLeft: {
                type: String,
                default: ''
            },
            iconType:{
                type: String,
                default: ''
            },
            singleTitle: {
                type: [Boolean,String],
                default: true
            },
            showLine: {
                type: [Boolean,String],
                default: true
            },
            round: {
                type: [Boolean,String],
                default: true
            },
            showLeftImg: {
                type: [Boolean,String],
                default: true
            },
            showRightImg: {
                type: [Boolean,String],
                default: false
            },
        },
        methods: {
          getClick(){
            this.$emit('click');
          }
        },
        data() {
            return {
                showCloseBtn: false, //是否显示关闭
            }
        },
    }
</script>

<style lang="less">
    /*0.5边线*/
    .hairline-bottom{position: relative;border:none;}
    .hairline-bottom::after{content: '';position: absolute;left: 0;bottom: 0;border-bottom: 1px solid #DDDEE3;width: 100%;-webkit-transform: scale(1,.5);transform: scale(1,.5);-webkit-transform-origin: center bottom;transform-origin: center bottom;z-index: 1;}
    .customer-form-itemA{
        display:flex;
        display:-webkit-flex;
        padding:12px 0 0 16px;
        position:relative; 
        .itemA-left { 
            padding-right:12px;
            padding-bottom:7px; 
            .itemA-img { 
                max-width:100%;
                width:50px;
                height:50px; 
            }
        }
        .itemA-right { 
            position: relative;
            flex:1;
            padding-bottom:12px;
            padding-right:16px;
            display:flex;
            display:-webkit-flex; 
            .itemA-content { 
                flex:1; 
                .itemA-titles { 
                    display:flex;
                    display:-webkit-flex;  
                    .itemA-title { 
                        flex:2;
                        font-family:PingFangSC-Regular;
                        font-size:18px;
                        color:#222222;
                        text-overflow:-o-ellipsis-lastline;
                        text-overflow:ellipsis;
                        overflow:hidden;
                        display:-webkit-box;
                        -webkit-line-clamp:1;
                        -webkit-box-orient:vertical; 
                    }
                    .itemA-sign { 
                        width:70px;
                        font-family:PingFangSC-Regular;
                        font-size:12px;
                        color:#8E8E93;
                        text-align:right; 
                    }
                    
                }
                .itemA-sub-title { 
                    font-family: PingFangSC-Regular;
                    font-size: 15px;
                    color: #8E8E93;
                    text-overflow: -o-ellipsis-lastline;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    padding-right: 10px;
                }
            }
            .itemA-icon { 
                width:22px;
                line-height:30px;
                padding-left:5px;
            }
            .vanIcon {
                color:#C5C5C5;
                font-size:18px;
                position: relative;
                top: 5px;
            }
        }
       
    }
</style>


