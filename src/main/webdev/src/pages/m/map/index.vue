<template>
    <div>
      
    </div>
</template>

<script>
    import Vue from 'vue'
    import './toongine_1_0_9'
export default {
    data () {
        return {
            keyWords: ''
        }
    },
    methods: {
        getQueryString(name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
          var r = window.location.search.substr(1).match(reg);
          if (r === null) {
            var reg2 = /^.*?[?]/;
            var r2 = window.location.hash.replace(reg2, '');
            r = r2.match(reg);
          }
          if (r != null) return decodeURIComponent((r[2]));
          return null;
        },
      getGPSData() {
        // setTimeout(()=>{
        //   window.alert('定位失败，请确认开启定位权限');
        // }, 4500)
        // setTimeout(() => {
        //   toongine.app.shutdown({
        //     callback: res => {
        //       console.log("res: " + res.code);
        //     }
        //   });
        // }, 5000)
        toongine.location.getLocation({
          callback: res => {
            if (res.code !== 0) {
              window.alert('定位失败，请确认开启定位权限');
              setTimeout(() => {
                toongine.app.shutdown({
                  callback: res => {
                    console.log("res: " + res.code);
                  }
                });
              }, 1500)
            } else {
              this.goHref(res.data.longitude, res.data.latitude, res.data.city, res.data.address);
            }
          }
        })
      },
      goHref(longitude, latitude, city, address) {
        let url = 'https://m.amap.com/search/view/adcode=110000&longitude=' + longitude + '&latitude=' + latitude + '&user_loc=' + longitude + '%2C' + latitude + '&city=' + city + '&keywords=' + this.keyWords +'&location='+address+ '&type=nearby';
        window.location.replace(url);
      }
    },
    mounted () {
        this.keyWords = this.getQueryString('keywords')

        this.getGPSData()
    }
}
</script>

<style lang="less" scoped>

</style>