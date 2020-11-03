<template>
    <div>
        <van-cell class="pickermore" arrow-direction="down" :is-link="isLink" :value="value" @click="showPopp"/>
        <div v-show="false">解决vant-cell不显示border的bug</div>
        <van-popup position="bottom"  v-model="show">
            <van-picker  ref="picker"
                         @confirm="confirm"
                         @cancel="cancel"
                         :show-toolbar="showToolbar"
                         confirm-button-text="确定"
                         cancel-button-text="取消" :columns="columns" @change="onChange" />
        </van-popup>
    </div>
</template>

<script>
  export default {
    name: "vant-picker-more",
    data() {
      return {
        value: '全部',
        isLink: true,
        showToolbar:true,
        show:false,
        dateYear: ['全部'],
        dateMonth: [],
        date:{},
        columns: [],
      }
    },
    created() {
      this.getTime();
    },
    methods: {
      getTime() {
        let nowYear = new Date().getFullYear();
        let nowMonth = new Date().getMonth() + 1;
        let dateMonthnow = [];
        for (let i = nowMonth; i >= 1; i--) {
          dateMonthnow.push(String(i) + '月');
        }
        this.dateMonth = [[''],dateMonthnow,["12月","11月","10月","9月","8月","7月","6月","5月","4月","3月","2月","1月"]];
        for (let i = nowYear; i >= 2000; i--) {
          this.dateYear.push(String(i) + '年');
        }
        for(let j = 0;j<this.dateYear.length;j++){
          let  key = this.dateYear[j];
          let  val = '';
          if (j == 0) {
            val = this.dateMonth[0];
          } else if (j == 1) {
            val = this.dateMonth[1];
          } else {
            val = this.dateMonth[2];
          }
          this.date[key] = val;
        }
        this.columns = [
          {
            values: Object.keys(this.date),
            className: 'column1'
          },
          {
            values: this.date['全部'],
            className: 'column2',
            defaultIndex: 2
          }
        ]
      },
      onChange(picker, values) {
        picker.setColumnValues(1, this.date[values[0]]);
      },
      showPopp (){
        this.show = !this.show;
      },
      confirm(value){
        console.log(value);
        this.value = value[0]+value[1];
        this.$emit('onConfirm',{
          value
        });
        this.showPopp();
      },

      cancel(){
        this.showPopp();
        this.$emit('onCancel');
      }
    }
  }
</script>

<style lang="less">
    .pickermore .van-cell__value{
        text-align: right!important;
    }
</style>
