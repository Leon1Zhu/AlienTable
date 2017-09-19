<template>
    <div id="app" class="alien-table">
      <div class="table-content">
        <table>
          <thead>
          <tr class="table-header">
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
          </thead>
          <tbody class="table-tbody">
            <tr>
              <td >1</td>
              <td  colspan="2">1</td>
              <td >1</td>
              <td >1</td>
              <td >1</td>
            </tr>
            <tr>
              <td >1</td>
              <td rowspan="2" colspan="2">1</td>
              <td r>1</td>
              <td >1</td>
              <td >1</td>
            </tr>
            <tr>
              <td >1</td>
              <td colspan="2">1</td>
              <td >1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import tableHeader from './tableHeader.vue'
    export default{
    name: 'alienTable',
        /*props: {
          header: {
            type: Array,
            default: [],
          },
          data: {
            type: Array,
            default: []
          },
          striped: {
            type: Boolean,
            default: false,
          },
          pagination: {
            type: Boolean,
            default: false,
          },
          pageSize: {
            type: String,
            default: 0,
          },
          pageList: {
            type: Array,
            default: [5,10,15,20],
          }
        },*/
        data(){
            return {}
        },
        components: {
            "table-header": tableHeader
        },
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
<style  lang="scss" rel="stylesheet/scss">
  #app{
    position: relative;
    border: 1px solid #dddee1;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
    .table-content{
      table{
        width: 100%;
        height: 100%;
        max-width: 100%;
        overflow: hidden;
        color: #495060;
        font-size: 12px;
        background-color: #fff;
        border:0px;
        th,td{
          border-bottom:1px solid  #dddee1;
          border-left:1px solid  #dddee1;
        }
        th{
          padding:13px 11px;
        }
        td{
          padding:11px;
        }
        tr:last-child td{
          border-bottom:0px;
        }
        tr td:first-child,tr th:first-child{
          border-left:0px;
        }
      }
      .table-header{
        position: relative;
        left:0;
        right:0;
        width:100%;
        background-color: #f8f8f9;
        th,td{
          text-align: left;
          vertical-align: middle;
        }
        th.center{
          text-align: center;
        }
        th.right{
          text-align: right;
        }
        td.center{
          text-align: center;
        }
        td.right{
          text-align: right;
        }

      }
    }
  }

</style>
