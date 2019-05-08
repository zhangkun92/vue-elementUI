<!--  模板 -->
<template>
    <div id = "home">
        <!--<app-header @titleChanged = "updateTitle($event)" :title = "title"></app-header>-->
        <!--<app-header :title = "title"></app-header> &lt;!&ndash; 父组件展示子组件的值 &ndash;&gt;-->
        <!--<app-header @titleChanged = "updateTitle($event)"></app-header>-->
        <!--<app-footer></app-footer>-->
      <div v-for="shape in shapes"v-bind:class="[ shape.shape ]" class="shape"></div>

      <div>父组件的toCity{{toCity}}</div>
      <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
    </div>
</template>

<!-- 行为 -->
<script>
    // 局部注册组件
    import Users from './User'
    import Header from './Header'
    import Footer from './Footer'
    import TrainCity from "./trainCity"

     export default {
        name: 'home',
        data(){
            return{
              users:[
                {name:"Henry",Position:"Java工程师",show:true},
                {name:"Lily",Position:"Java工程师",show:true},
                {name:"Kang",Position:"Java工程师",show:true},
                {name:"Henry",Position:"Java工程师",show:true},
                {name:"Henry",Position:"Java工程师",show:true}
                ],
              title:"这是一个title！",
              toCity:"北京",
              color: 'red',
              shapes: [
                {
                  shape: 'circle'
                },
                {
                  shape: 'square'
                },
                {
                  shape: 'triangle',
                  direction: 'up'
                },
                {
                  shape: 'triangle',
                  direction: 'right'
                },
                {
                  shape: 'triangle',
                  direction: 'down'
                },
                {
                  shape: 'triangle',
                  direction: 'left'
                }

              ]


            }
        },
       methods:{
         updateTitle:function (title) {
             this.title = title
         },
         updateCity(data){//触发子组件城市选择-选择城市的事件
           this.toCity = data.cityname;//改变了父组件的值
           console.log('toCity:'+this.toCity)
         }

       },

       components:{
            "users": Users,
            "app-header":Header,
            "app-footer":Footer,
            "train-city":TrainCity
       },
       computed: {
         changeColor: function () {
           if (this.color = 'blue') {
             this.color = 'red'
           } else {
             this.color = 'blue'
           }
         }
       }


     }

</script>
