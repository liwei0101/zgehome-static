<template>
    <div class="parent-list" >
        <div class="sub-list"  >
             <van-pull-refresh 
                v-model="isLoading" 
                :pulling-text="pullingText"
                :loosing-text="loosingText"
                :success-text="successText"
                @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    :finished-text="finishedText"
                    :error-text="errorText"
                    :immediate-check='autoLoad'
                    @load="onLoad" >
                       <slot>
                             
                       </slot>
                       <slot name="loading">
                             
                       </slot>
                </van-list>
            </van-pull-refresh>
        </div>

    </div>
</template>

<script>
import {postRequest} from '@/libs/http/$http.js'
import { Toast } from 'vant';

export default {
    name: "vant-custom-list-refresh",
    props: {
        value:{
            type: [ Boolean,String],
            default(){
                return null
            }
        },
        url: {
            type: String,
            default: ''
        },
        param: {
            type: Object,
            default: {}
        },
        pageNoKey: {
            type: String,
            default: 'pageNo'
        },
        pageSizeKey: {
            type: String,
            default: 'pageSize'
        },
        records: {
            type: String,
            default: 'records'
        },
        pageSize: {
            type: Number,
            default: 10
        },
        
        pullingText: {
            type: String,
            default: '下拉刷新'
        },
        loosingText: {
            type: String,
            default: '加载中'
        },
        successText: {
            type: String,
            default: ''
        },
        finishedText: {
            type: String,
            default: '—— •我是有底线的• ——'
        },
        errorText: {
            type: String,
            default: '请求失败，点击重新加载'
        },
        autoLoad: {
            type: Boolean,
            default: false
        },
        reguler: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            isLoading: false,
            loading: false,
            listData:[],
            error:false,
            finished:false,
            pageNum:1
        }
    },
    mounted () {
    }, 
    methods: {
        init (top){
            let param_={};
            let param1= this.pageNoKey;
            let param2= this.pageSizeKey;
            param_[param1]= this.pageNum;
            param_[param2]= this.pageSize;
            postRequest(this.url,
            Object.assign(this.param,param_))
            .then(resa => {
                let res;
                if(this.reguler){
                    res = resa.data.news;
                }else{
                    res = resa.data;
                }
                if(res && res[this.records]){
                    if (top) {
                        this.finished = false;
                        this.listData = [];
                        this.listData = res[this.records];
                    } else {
                        this.listData = this.listData.concat(res[this.records]);
                    }
                    if (res[this.records].length < 10) {
                        this.finished = true;
                    }
                    this.loadData = true;
                    this.isLoading = false;
                    this.loading = false;
                    this.pageNum++;
                    this.$emit('getData',this.listData,resa.data);
                }else{
                    this.finished = true;
                    this.loadData = true;
                    this.isLoading = false;
                    this.loading = false;
                }
                
            })
            .catch(err => {
                if (navigator.onLine) {
                Toast("服务器异常，请稍后重试");
                } else {
                Toast("网络异常，请稍后重试");
                }
            });
        },
        onRefresh() {
            this.pageNum = 1;
            this.listData = [];
            this.init(true);
        },
        onLoad() {            
            this.init(false);
        },
    }
}
</script>
