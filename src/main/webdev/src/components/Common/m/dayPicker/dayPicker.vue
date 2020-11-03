<template>
    <div>
        <van-cell
                :icon="leftIcon"
                @click="showDateTime"
                :title="title"
                :value="cellValue"
                :is-link="isLink"
                :required="required"
        />
        <div v-show="false">解决vant-cell不显示border的bug</div>
        <van-popup position="bottom" v-model="show">
            <van-datetime-picker
                    :formatter="formatter"
                    v-model="currentDate"
                    :type="type"
                    :title="dateTitle"
                    :show-toolbar='showToolbar'
                    :confirm-button-text="confirmButtonText"
                    :cancel-button-text="cancelButtonText"
                    :visible-item-count="visibleItemCount"
                    :max-date="maxDate"
                    :min-date="minDate"
                    @change="change"
                    @confirm="confirm"
                    @cancel="cancel"
            />
        </van-popup>
    </div>
</template>

<script>
  import {dateFormat} from '@/libs/date'

  export default {
    name: "day-picker",
    props: {
      value: {
        type: [String, Array, Number],
        default: null
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      title: {
        type: String,
        default: '日期'
      },
      type: {
        type: String,
        default: 'dateTime'
      },
      dateTitle: {
        type: String,
        default: ''
      },
      maxMinute: {
        type: String,
        default: '59'
      },
      minMinute: {
        type: String,
        default: '0'
      },
      maxHour: {
        type: String,
        default: '23'
      },
      minHour: {
        type: String,
        default: '0'
      },
      maxDate: {
        type: Date,
        // default: new Date(new Date().getFullYear()+1,11,31)
      },
      minDate: {
        type: Date,
        // default: new Date(new Date().getFullYear(),0,1)
      },
      showToolbar: {
        type: Boolean,
        default: true
      },
      loading: {
        type: Boolean,
        default: false
      },
      itemHeight: {
        type: Number,
        default: 44
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
      format: {
        type: Boolean,
        default: true
      },
      leftIcon: {
        type: String,
        default: null
      },
      isLink: {
        type: Boolean,
        default: true
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selDate:[],
        currentDate: new Date(),
        show: false,
        defaultValue: null,
        defaultValueDate: null
      }
    },
    created () {
      let a = this.currentDate.getFullYear() + '年';
      let b = this.currentDate.getMonth() + 1 + '月';
      let c = this.currentDate.getDate() + '日';
      this.selDate = [a, b, c];
    },
    computed: {
      cellValue: {
        get() {
          return this.value ? this.value : this.defaultValue ? this.defaultValue : this.placeholder;
        }
      }
    },
    methods: {
      showDateTime() {
        if (this.value) {
          this.currentDate = new Date(this.value);
        }
        this.show = !this.show;
      },
      formatter(type, value) {
        let day = '';
        switch (new Date(this.currentDate).getDay()) {
          case 1:
            day = '周一';
            break;
          case 2:
            day = '周二';
            break;
          case 3:
            day = '周三';
            break;
          case 4:
            day = '周四';
            break;
          case 5:
            day = '周五';
            break;
          case 6:
            day = '周六';
            break;
          case 0:
            day = '周日';
            break;
        }
        if (this.format) {
          if (type === 'year') {
            return `${value}年`;
          } else if (type === 'month') {
            return `${value}月`
          } else if (type === 'day') {
            if (this.selDate[2]) {
              var str = this.selDate[2];
              var a = str.substr(0, str.indexOf('日'));
            }
            if (value == a) {
              return `${value}日 ${day}`
            } else {
              return `${value}日`
            }
          }
        }
        return value;
      },
      confirm(value) {
        this.showDateTime();
        let formatData = 'yyyy-MM-dd hh:mm';
        if (this.type === 'date') {
          formatData = 'yyyy-MM-dd';
        } else if (this.type === 'time') {
          formatData = 'hh:mm';
        } else if (this.type === 'year-month') {
          formatData = 'yyyy-MM';
        }
        let day = '';
        switch (value.getDay()) {
          case 1:
            day = '周一';
            break;
          case 2:
            day = '周二';
            break;
          case 3:
            day = '周三';
            break;
          case 4:
            day = '周四';
            break;
          case 5:
            day = '周五';
            break;
          case 6:
            day = '周六';
            break;
          case 0:
            day = '周日';
            break;
        }
        this.defaultValueDate = value;
        this.defaultValue = dateFormat(formatData, value) + ' '+ day;
        this.$emit('input', dateFormat(formatData, value));
        this.$emit('onConfirm', {
          value
        });
      },
      cancel() {
        this.showDateTime();
        this.defaultValueDate?this.currentDate = this.defaultValueDate:this.currentDate = new Date();
        this.$emit('onCancel');
      },
      change(picker) {
        this.selDate = picker.getValues();
      }
    }
  }
</script>

<style lang="less">
    .van-cell__value .van-icon {
        height: 24px;
        min-width: 1em;
        font-size: 16px;
        line-height: 24px;
    }
</style>


