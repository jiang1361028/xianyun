<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->

        <FlightsFilters :data="cacheFlightsData" @cacheFlights="cacheFlights"/>
        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item" />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <FlightsAside/>
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
import FlightsAside from "@/components/air/flightsAside.vue";
export default {
  watch: {
    // 监听路由的变化
    $route() {
      // 请求机票列表
      this.getData();
    }
  },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  computed: {
    dataList() {
      return this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
    }
  },
  data() {
    return {
      flightsData: {
        flights: [],
        info: {},
        options: {}
      },
      // 缓存
      cacheFlightsData: {
        flights: [],
        info: {},
        options: {}
      },
      pageSize: 5,
      pageIndex: 1,
      total: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      // 刷新回到第一页
      this.pageSize = 1;
      // this.setDataList();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.pageIndex = val;
      // this.setDataList();
    },
    getData() {
      this.pageIndex=1
      this.$axios({
        url: "/airs",
        params: this.$route.query
      }).then(res => {
        console.log(res.data);
        this.flightsData = res.data;
        // 缓存数据
        this.cacheFlightsData={...res.data}
        //   总条数
        this.total = this.flightsData.flights.length;
        //   this.dataList = this.flightsData.flights;
      });
    },
    cacheFlights(arr){
     this.flightsData.flights=arr
    //  console.log(this.flightsData.flights)
    }
    // 获取datalist数据
    // setDataList() {
    //   this.dataList = this.flightsData.flights.slice(
    //     (this.pageIndex - 1) * this.pageSize,
    //     this.pageIndex * this.pageSize
    //   );
    // }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>