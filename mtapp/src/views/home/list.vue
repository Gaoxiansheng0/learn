<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <ul class="list-container">
        <li class="shop-list" v-for="item in list" :key="item.id">
          <div class="img-box">
            <img :src="item.img" alt="" />
          </div>
          <div class="info-box">
            <div class="title">{{ item.name }}</div>
            <div class="rate-box">
              <!-- 让上面这个div的display为flex 则下面都水平排列了 -->
              <div>
                <star :score="item.score"></star>
                <span class="rate">{{ item.score }}</span>
                <span>月销{{ item.num }}</span>
              </div>
              <div>
                <span>{{ item.minute }}分钟 </span>
                <span class="left-line">{{ item.distance }}</span>
              </div>
            </div>
            <div class="distribution-box">
              <span>起送{{ item.per_capita }}</span>
              <span class="left-line">配送{{ item.fee }}</span>
              <span class="left-line">人均{{ item.price }}</span>
            </div>
          </div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import star from "./../../components/star";
import { getStore } from "@/api/home";
export default {
  data() {
    return {
      current: 0,
      size: 10,
      list: [],
      loading:false,
      finished:false,
      total:0
    };
  },
  components: {
    star,
  },
  methods: {
    // 获取商家列表
    getData() {
      getStore({
        current: this.current,
        size: this.size,
      }).then((res) => {
        // this.list = res.data.list;
        this.list = this.list.concat(res.data.list);  //concat 拼接 两个或多个数组
        this.loading = false;
        this.current++;
        this.total = res.data.total;
        if(this.list.length >=this.total){
            this.finished = true
        }
      });
    },
  },
  // created() {
  //   this.getData();
  // },
};
</script>

<style lang="scss" scoped>
.list-container {
  padding: 0 0.2rem;
  .shop-list {
    margin: 0.2rem 0 0.5rem 0;
    display: flex; //如果想让图片底下的文字在右边显示  用弹性盒模型
    .img-box {
      width: 1.52rem;
      height: 1.14rem;
      margin-right: 0.16rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info-box {
      flex: 1;
      .title {
        font-size: 0.32rem;
        color: #333;
        line-height: 1.4;
        font-weight: 600;
      }
    }
    .rate-box,
    .distribution-box {
      display: flex;
      color: #333;
      line-height: 1.4;
      font-family: mtsi-font;
      font-size: 11px;
      .rate {
        margin-right: 0.2rem;
      }
      .left-line::before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 6px;
        margin: 0 3px;
        background: #ccc;
      }
    }
    .rate-box {
      justify-content: space-between;
    }
  }
}
</style>