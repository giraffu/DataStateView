<!--
 * @Author: chuzeyu 3343447088@qq.com
 * @Date: 2023-06-25 15:10:33
 * @LastEditors: chuzeyu 3343447088@qq.com
 * @LastEditTime: 2023-06-25 15:14:01
 * @FilePath: \DataStateView\src\components\TableSensor.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-tabs v-model:activeTabKey="activeTabKey">
    <a-tab-pane key="1" tab="WYTJ-01标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="2" tab="WYTJ-02标段" force-render>
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="3" tab="WYTJ-03标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="4" tab="WYTJ-04标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="5" tab="WYTJ-05标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="6" tab="WYTJ-06标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="7" tab="WYTJ-07标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="8" tab="WYTJ-08标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="9" tab="WYTJ-09标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="10" tab="WYTJ-10标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="11" tab="WYTJ-11标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="12" tab="WYTJ-12标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="13" tab="WYTJ-13标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="14" tab="WYJD-01标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
    <a-tab-pane key="15" tab="WYWD-01标段">
      <a-table :dataSource="table1" :columns="columns" />
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import {ref} from 'vue'
const activeTabKey = ref('1');
export default {
    setup() {
      return {
        table1: [
          {
            key: '1',
            name: '人车定位一',
            loc: '前峡8号大桥',
            state: '中断',
          },
          {
            key: '2',
            name: '人车定位二',
            loc: '前峡13号大桥',
            state: '良好',
          },
        ],
        columns: [
          {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '地点',
            dataIndex: 'loc',
            key: 'loc',
          },
          {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
          },
        ],
      };
    },
  };
</script>