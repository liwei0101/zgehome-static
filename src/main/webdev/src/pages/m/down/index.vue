<template>
    <div class="down">
        <div class="down-bg">
            <img src="../../../assets/downIcon.png" alt="">
        </div>
        <p class="img-lable">移动办公</p>
        <div class="down-btn">
            <p class="text">请点击下载移动办公</p>
            <div class="btn btnandroid" @click="downData">
                <img src="../../../assets/android.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      data () {
          return {

          }
      },
      methods: {
        downData () {
            window.location.href = 'http://app.systoon.com/apk/zgejoa.apk'
        }
      },
      mounted () {
          
      }
  }
</script>

<style lang="less" scoped>
    .down-btn {
        margin-top: 120px;
    }
    .down-bg {
        width: 105px;
        height: 105px;
        margin: 0 auto;
        margin-top: 100px; 
        img {
            width: 100%;
            height: 100%;
        }
    }
    .img-lable {
        text-align: center;
        color: #494949;
        font-weight: bold;
        font-size: 30px;
    }
    .text {
        color: #838383;
        margin: 0 auto;
        margin-bottom: 30px;
        text-align: center;
        font-size: 16px;
    }
    .btn {
        width: 56%;
        height: 40px;
        margin: 0 auto;
        margin-bottom: 30px;
        img {
            width: 100%;
            height: 40px;
        }
    }
</style>

