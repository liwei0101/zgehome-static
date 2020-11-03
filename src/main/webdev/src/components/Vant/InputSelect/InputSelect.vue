<template>
  <div>
    <van-cell 
        :icon="leftIcon" 
        @click="showPopp" 
        :title="title" 
        :value="cellValue.text?cellValue.text:cellValue"
        :is-link="isLink"
        :required="required"
    />
    <div v-show="false">解决vant-cell不显示border的bug</div>
    <van-popup position="bottom"  v-model="show">
        <van-picker  ref="picker"
            :columns="list" 
            @change="onChange" 
            @confirm="confirm" 
            @cancel="cancel"
            :show-toolbar="showToolbar"
            :title="selectTitle"
            :loading="loading"
            :default-index="defaultIndex"
            :visible-item-count="visibleItemCount"
            :confirm-button-text="confirmButtonText"
            :cancel-button-text="cancelButtonText"
        />
    </van-popup>
  </div>
</template>

<script>
export default {
    name: "vant-custom-select-data",
    props: {
        value:{
            type: [Object,String],
            default: null
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        columns: {
            type: Array,
            default:  () => {
                return [{
                    text: '杭州',
                    id:1
                }, {
                    text: '杭州2',
                    id:3
                }, {
                    text: '杭州3',
                    id:4
                }, {
                    text: '杭州4',
                    id:5
                }, {
                    text: '杭州5',
                    id:56
                }]
            }
        },
        showToolbar: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '选择框'
        },
        selectTitle: {
            type: String,
            default: ''
        },
        isLink: {
            type: Boolean,
            default: true
        },
        leftIcon: {
            type: String,
            default: ''
        },

        confirmButtonText: {
            type: String,
            default: '确定'
        },
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        visibleItemCount: {
            type: Number,
            default: 5
        },
        required: {
          type: Boolean,
          default: false
        },
        selectValue:{
            type: String,
            default: 'text'
        },
        selectKey:{
            type: String,
            default: 'id'
        }
    },
    data() {
        return {
            defaultIndex:0,
            index_:'',
            show:false,
            defaultValue:null ,
        }
    },
    watch: {
        value: {
            handler(val) {
                

            }
        }
    },
    mounted(){

    },
    computed:{
        cellValue(){
            this.list.findIndex((item,index)=>{
                if(this.value && this.value.id === item.id){
                    this.defaultIndex = index;
                }
            });
            return this.value  ?  this.value :  this.defaultValue ? this.defaultValue : this.placeholder
        },
        list(){
            let list_ = [];
            for(var index in this.columns){
                let item = this.columns[index];
                list_.push(Object.assign(
                    {
                        text:item[this.selectValue],
                        id:item[this.selectKey],

                    },item));
            }
             return list_;
        }
    },
    methods: {
        showPopp (){
            this.show = !this.show;
        },
        confirm(value, index){
            console.log(value);
            this.defaultValue = value
            this.$emit('input',value);
            this.$emit('onConfirm',{
                value, index
            });
            this.showPopp();
        },
        onChange(picker, value, index){
            console.log(value);
            this.$emit('onChange',{
                picker, value, index
            });
        },
        cancel(){
            this.showPopp();
            this.$emit('onCancel');
        }
    }
}
</script>

<style lang="less">
  
</style>
