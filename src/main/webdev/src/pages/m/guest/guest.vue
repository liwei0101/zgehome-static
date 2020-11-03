<template>
    <div class="main-page">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="div2">
                <div class="div">
                    <!--<span class="city">-->
                        <!--<van-icon name="location-o"/>-->
                        <!--<span class="span1">{{city}}</span>-->
                    <!--</span>-->
                    <span class="span">{{temperature.temperature}}</span>
                    <span class="tianqi" v-show="temperature.weatherIcon">
                        <img :src="temperature.weatherIcon" class="imgtianqi"/>
                        <span class="span1">{{ temperature.weather }}</span>
                    </span>
                </div>
                <div class="div1" v-show="temperature.AQI">
                    <!--限行 {{ temperature.carLimitNumbers }}-->
                    <span class="span2">空气质量</span>
                    <span class="span3">{{ temperature.AQI }}</span>
                    {{ temperature.quality }}
                </div>
            </div>
            <div class="div4" @click="handleGoLogin">
                <span class="span4">登录准格尔家，体验更多服务</span>
                <IconList :column="4" :listData="iconlistListData" class="iconlist"></IconList>
                <div class="div3">
                    <span class="span5">我要登录</span>
                    <van-icon color="inherit" tag="i" class-prefix="van-icon van-icon-arrow" class="vanIcon"></van-icon>
                </div>
            </div>
            <div v-for="(item, index) in list" class="div5">
                <PageHomeList :title="item.tlt" :list="item.list" :tyle="item.compType"
                              v-if="item.compType != 'banner-image'" @clickItem="onClickAppItem"></PageHomeList>
                <PageHomeImageBanner :title="item.tlt" :image="item.list"
                                     v-if="item.compType == 'banner-image'"
                                     @clickBanner="onClickAppItem"></PageHomeImageBanner>
            </div>
            <div class="div7">
                <span class="goText">到底啦，体验更多精彩服务请</span>
                <div class="div6">
                    <span @click="handleGoLogin" class="goText1">登录</span>
                    <van-icon color="inherit" tag="i" class-prefix="van-icon van-icon-arrow"
                              class="vanIcon1"></van-icon>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
  import PageHomeList from './List';
  import PageHomeImageBanner from './ImageBanner';
  import './toongine';

  export default {
    components: {
      PageHomeList,
      PageHomeImageBanner
    },
    data() {
      return {
        iconlistListData: [
          {
            name: '医保查询',
            logo: require('../../../assets/medical.png'),
            url: ''
          },
          {
            name: '预约挂号',
            logo: require('../../../assets/register.png'),
            url: ''
          },
          {
            name: '准格尔云',
            logo: require('../../../assets/cloud.png'),
            url: ''
          },
          {
            name: '智慧社区',
            logo: require('../../../assets/community.png'),
            url: ''
          }
        ],
        list: [
          {
            tlt: '政务服务',
            compType: 'icon-text',
            list: [
              {
                title: '准旗公安',
                subTitle: '准格尔旗公安服务',
                url: 'https://zgehomet800.systoon.com/static/dist/m/index.html#/',
                image: require('../../../assets/public.png')
              },
              {
                title: '准旗城管',
                subTitle: '准格尔旗城市管理',
                url: 'https://share.beijingtoon.com/bjtoon-information/app/index.html?appCode=chengshiguanli#/index',
                image: require('../../../assets/management.png')
              },
              {
                title: '信息公开',
                subTitle: '政府信息在线公开',
                url: 'https://zgehomet800.systoon.com/static/dist/m/index.html#/infoHome',
                image: require('../../../assets/open2.png')
              },
              // {
              //   title: '快递查询',
              //   subTitle: '快递实时查',
              //   url: 'http://www.kuaidi100.com/?openid=ofaKJv7_Im0BkKWSCsQh6ua4b_68',
              //   image: require('../../../assets/icon.png')
              // }
            ]
          },
          {
            tlt: '城市生活',
            compType: 'icon-text',
            list: [
              {
                title: '附近派出所',
                subTitle: '派出所在身边',
                url: 'https://zgehomet800.systoon.com/static/dist/m/#/map?keywords=%E6%B4%BE%E5%87%BA%E6%89%80',
                image: require('../../../assets/policeStation.png')
              },
              {
                title: '附近银行',
                subTitle: '周边银行轻松查',
                url: 'https://zgehomet800.systoon.com/static/dist/m/#/map?keywords=%e9%93%b6%e8%a1%8c',
                image: require('../../../assets/bank.png')
              },
              {
                title: '附近加油站',
                subTitle: '准格尔旗加油站',
                url: 'https://zgehomet800.systoon.com/static/dist/m/#/map?keywords=%e5%8a%a0%e6%b2%b9%e7%ab%99',
                image: require('../../../assets/gasStation.png')
              },
              {
                title: '附近停车场',
                subTitle: '周边停车场速查',
                url: 'https://zgehomet800.systoon.com/static/dist/m/#/map?keywords=%e5%81%9c%e8%bd%a6%e5%9c%ba',
                image: require('../../../assets/parking.png')
              }
            ]
          },
          {
            tlt: '交通出行',
            compType: 'icon-text',
            list: [
              {
                title: '免费公交',
                subTitle: '免费公交时刻表',
                url: 'https://freebust800.systoon.com/m/index.html#/',
                image: require('../../../assets/transit.png')
              },
              {
                title: '汽车票预订',
                subTitle: '在线预订汽车票',
                url: 'https://m.ctrip.com/webapp/bus/bus/index?allianceid=7225&sid=730567&ouid=bus&sourceid=2404',
                image: require('../../../assets/busTicket.png')
              },
              {
                title: '火车票查询',
                subTitle: '在线查询列车信息',
                url: 'http://mobile.12306.cn/weixin/wxcore/init',
                image: require('../../../assets/trainSearch.png')
              },
              // {
              //   title: '购物',
              //   subTitle: '购物地点查询',
              //   url: 'http://static.chengdetoon.com/surroundingLife/index.html?keywords=购物',
              //   image: require('../../../assets/icon.png')
              // }
            ]
          },
           {
            tlt: '文化教育',
            compType: 'icon-text',
            list: [
              {
                title: '学籍查询',
                subTitle: '学籍在线查询',
                url: 'http://113.207.121.39:18585/cqmobile/mobile/enquiry/query_school_status/index.html',
                image: require('../../../assets/studentSearch.png')
              },
              {
                title: '中等教育查询',
                subTitle: '中等教育学历报告',
                url: 'https://www.chsi.com.cn/xlrz/paper/report/zdjyxl.action',
                image: require('../../../assets/secondaryEducation.png')
              },
              {
                title: '高等教育查询',
                subTitle: '学历证书查询',
                url: 'https://www.chsi.com.cn/xlcx/lscx/query.action',
                image: require('../../../assets/higherEducation.png')
              },
              {
                title: '职业证书查询',
                subTitle: '职业资格证书查询',
                url: 'http://113.207.121.39:18585/cqmobile/mobile/enquiry/query_certificate/index.html',
                image: require('../../../assets/professionalCertificate.png')
              }
            ]
          }

        ],
        temperature: {
          // AQI: '30',
          // carLimitNumbers: '0/5',
          // isCarLimit: 1,
          // quality: '优',
          // temperature: '7-24°',
          // weather: '晴',
          // weatherCode: '1001',
          // weatherIcon: 'http://scloud.toon.mobi/f/VyMBpiLoPRZFUgy7br3AKo2nIsaWO-JMlRakIyTlRMgfG.png'
        },
        // city: '北京市',
        isLoading: false
      };
    },
    created() {
      this.init();
    },
    methods: {
      /**
       * 获取城市
       * */
      getCity() {
        toongine.location.getLocation({
          callback: res => {
            if (res.code !== 0) {
              // window.alert(res.msg);
            } else {
              this.city = res.data.city;
            }
          }
        })
      },
      /**
       * 聚合天气
       */
      apiJuheTianqi() {
        let params = {};
        // http://customt800.systoon.com/homepage_dz/juhe/info
        this.getRequest('http://customt800.systoon.com/homepage_dz/juhe/info')
          .then(res => {
            if (res.data) this.temperature = res.data;
            this.isLoading = false;
          })
          .catch(e => {
            return Promise.reject(e);
          });
      },
      /**
       * 点击服务
       */
      onClickAppItem(app) {
        if (!window.$config.toon) {
          return window.open(app.url, '_blank');
        }
        toongine.protocol.request({
          params: {
            scheme: 'toon',
            domain: 'huairou',
            path: 'openH5App',
            query: {
              webUrl: app.url
            }
          },
          callback: res => {
            console.log('res: ' + res.data);
          }
        });
      },
      /**
       *
       */
      handleGoLogin() {
        console.log('跳转到登录');
        if (!window.$config.toon) {
          return;
        }
        toongine.protocol.request({
          params: {
            scheme: 'toon',
            domain: 'huairou',
            path: 'openLogin',
            query: {}
          },
          callback: res => {
            //console.log("res: " + res.data);
          }
        });
      },
      /**
       *
       */
      init() {
        this.apiJuheTianqi();
        // this.getCity();
        window.$config.toon = /toon/.test(navigator.userAgent.toLowerCase());

      },
      /**
       * 下拉刷新
       */
      onRefresh() {
        this.init()
      }
    }
  };
</script>

<style scoped lang="less">
    .main-page {
        .city {
            display: inline-flex;
            display: -webkit-inline-flex;
            align-items: center;
            margin-top: 4px;
            font-size: 16px;
            margin-right: 5px;
            .span1 {
                font-size: 16px;
            }
        }
        .tianqi {
            display: inline-flex;
            display: -webkit-inline-flex;
            align-items: center;
            margin-top: 8px;
        }

        .span {
            font-size: 28px;
            color: #ffffff;
            line-height: 28px;
        }

        .imgtianqi {
            max-width: 100%;
            width: 20px;
            height: 20px;
            margin: 0px 4px;
        }

        .span1 {
            font-size: 12px;
        }

        .div {
            display: flex;
            display: flex;
            padding: 10px;
            color: #fff;
        }

        .span2 {
            margin: 0;
        }

        .span3 {
            margin: 0px 5px 0px 5px;
        }

        .div1 {
            padding: 10px;
            color: #fff;
            font-size: 12px;
        }

        .div2 {
            padding: 48px 10px 150px 10px;
            background-image: url(../../../assets/bg.png);
            background-repeat: no-repeat;
            background-size: cover;
            font-family: Arial;
        }
        .div2 span {
            font-family: Arial;
        }
        .span4 {
            font-size: 19px;
            color: #222222;
            line-height: 24px;
            text-align: center;
            display: block;
            margin: 10px 0px 0px 0px;
        }

        .iconlist {
            margin: 0 0px 26px 0px;
        }

        .span5 {
            font-size: 16px;
        }

        .vanIcon {
            margin: 0px 0px 0px 5px;
        }

        .div3 {
            font-size: 14px;
            color: #007aff;
            letter-spacing: 0;
            line-height: 14px;
            padding: 0px 0px 10px 0px;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-content: center;
        }

        .div4 {
            padding: 10px 10px 10px 10px;
            margin: -150px 16px 20px 16px;
            text-align: center;
            background-color: rgba(255, 255, 255, 1);
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
            border-radius: 2px;
        }

        .div5 {
            border-bottom: 10px solid #f8f8fb;
        }

        .goText {
            display: inline-flex;
            display: -webkit-inline-flex;
            align-items: center;
        }

        .goText1 {
            display: inline-block;
        }

        .vanIcon1 {
            margin: 0px 0px 0px 5px;
        }

        .div6 {
            font-size: 14px;
            color: #007aff;
            letter-spacing: 0;
            line-height: 14px;
            margin: 0px 0px 0px 20px;
            display: inline-flex;
            display: -webkit-inline-flex;
            align-items: center;
        }

        .div7 {
            text-align: center;
            margin: 0px 0px 0px 0px;
            background-color: #f8f8fb;
            padding: 30px 0px 40px 0px;
            font-size: 14px;
            color: #8e8e93;
            letter-spacing: 0;
            line-height: 14px;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
        }
        .banner{
            padding: 10px 15px;
        }
    }
</style>
