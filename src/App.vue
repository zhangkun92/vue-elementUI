<template>
  <div id="app">
    <el-footer>
      <!--分页-->
      　　<paging></paging>
    </el-footer>

     route 路由
    <ul>
      <li> <router-link to="/home">Home</router-link> </li>
      <li> <router-link to="/helloworld">Hello</router-link> </li>
    </ul>
    <router-view></router-view>

    <el-button type="primary" icon="el-icon-search" @click="getApiData">点击得到数据</el-button>
    {{msg}}
    <el-table  v-loading="loading"
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>


    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
  import paging from './components/paging.vue'
  import axios from 'axios'
  export default {
    name: 'app',
    data () {
      return {
        msg: "",
        tableData:null,
        loading: false,
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }

    },
    methods:{
        getApiData:function() {

              this.loading = true
              console.log(this.loading)
                //设置请求路径
               var url  = "json/table.json";
              // function() {}  用es6箭头函数 （）=> {}
              axios.get(url).then((result) =>{
                       // result是所有的返回回来的数据
                       // 包括了响应报文行
                       // 响应报文头
                       // 响应报文体
                       this.loading = false;
                       console.log(this.loading)
                       this.tableData = result.data

                   });
        }
    },
    components:{
        paging
    }
  }
</script>

<style>

</style>
