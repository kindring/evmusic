<template>
  <div class="div">
    <!-- 内部级联组件 -->
    <div class="items">
      <div class="item" v-for="(item,i) in value" :key="'answer_'+item.toString() + '_' + i">

        <!-- 列信息 -->
        <template v-for="(col,j) in colnum" >
          <slot
            v-if="col.solt"
            :name="col.solt"
            :value="item[col.dataIndex]"
            @change="(e)=>{handelChange(e,col,item,item[col.dataIndex])}"
          ></slot>
          <a-input
            v-if="!col.solt"
            :placeholder="col.title"
            v-model="item[col.dataIndex]"
            :style="{
              width:col.width || '100%'
            }"
            :key="j"
            @change="(e)=>{handelChange(e,col,item,item[col.dataIndex])}"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'answer',
    model: {
      prop: 'value',
      event: 'change',
    },

    props: {
      value: {
        type: Array
      },
      colnum: {
        type: Array
      },
    },
    data(){
      return {
        va:[],
        colnums:[]
      }
    },
    mounted () {
    },
    watch:{
      value: (newVal,oldVal)=>{

      }
    },
    methods:{
      handelChange(e,i,j,val){
        console.log('------------')
        console.log(j);
        console.log(val);
        j.val = false;
      },
      handelAddItem(){
        //添加新项
        console.log(this.value);
        console.log('列字段');
        console.log(this.colnum);
      }
    }
  }
</script>

<style scoped>
  .div{

  }
  .div > .items > .item{
    display: flex;
    width: 100%;
  }
</style>