<template>
    <a-layout style="min-height: 100vh" >

      <a-layout-sider v-model:collapsed="collapsed" collapsible width="200">
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme = "dark" mode="inline">


            <a-sub-menu key="sub1">
            <template #title>
              <span>
                <pie-chart-outlined />
                <span>数据源状态汇总</span>
              </span>
            </template>
            <a-menu-item key="camera">摄像头</a-menu-item>
            <a-menu-item key="sensor">洞内传感器</a-menu-item>
            <a-menu-item key="pos">人车定位</a-menu-item>
            <a-menu-item key="TBM">TBM</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <desktop-outlined />
                <span>实时视频数据</span>
              </span>
            </template>

            <a-menu-item key="b1">
                <a-tooltip placement="left" title="WYTJ-01标段共4路,可用4路" >                
                    <span>
                    <eye-filled style="color: green;"/>
                <span>WYTJ-01标段</span>
              </span>
            </a-tooltip>

            </a-menu-item>
            <a-menu-item key="b2">
                <span>
                    <eye-filled style="color: green;"/>
                <span>WYTJ-02标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b3">
                <span>
                    <eye-filled style="color: green;"/>
                <span>WYTJ-03标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b4">
                <a-tooltip placement="left" title="WYTJ-04标段共4路,可用2路" >    
                <span>
                    <eye-filled style="color: yellow;"/>
                <span>WYTJ-04标段</span>
              </span>
            </a-tooltip>
            </a-menu-item>
            <a-menu-item key="b5">
                <span>
                    <eye-filled style="color: yellow;"/>
                <span>WYTJ-05标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b6">
                <a-tooltip placement="left" title="WYTJ-06标段共4路,可用0路" >   
                <span>
                    <eye-invisible-filled style="color:red;"/>
                <span>WYTJ-06标段</span>
              </span>
            </a-tooltip>
            </a-menu-item>
            <a-menu-item key="b7">
                <span>
                    <eye-filled style="color: green;"/>
                <span>WYTJ-07标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b8">
                <span>
                    <eye-invisible-filled style="color: red;"/>
                <span>WYTJ-08标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b9">
                <span>
                    <eye-filled style="color: yellow;"/>
                <span>WYTJ-09标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b10">
                <span>
                    <eye-filled style="color: green;"/>
                <span>WYTJ-010标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b11">
                <span>
                    <eye-filled style="color: green;"/>
                <span>WYJD-01标段</span>
              </span>
            </a-menu-item>
            <a-menu-item key="b12">
                <span>
                    <eye-invisible-filled style="color: red;"/>
                <span>WYWD-01标段</span>
              </span>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <file-outlined/>
                <span>实时集成数据</span>
              </span>
            </template>
            <a-menu-item key="3">洞内传感器</a-menu-item>
            <a-menu-item key="4">人车定位</a-menu-item>
            <a-menu-item key="5">TBM</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <template #title>
              <span>
                <team-outlined />

                <span>填报录入数据</span>
              </span>
            </template>
            <a-menu-item key="6">施工进度</a-menu-item>
            <a-menu-item key="7">监控量测</a-menu-item>
            <a-menu-item key="8">超前预报</a-menu-item>
            <a-menu-item key="9">桥梁监控</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="10">
            <cloud-download-outlined />
            <span>导出数据</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>

        <a-layout-content style="margin: 0 16px">
            <a-button :icon="h(SearchOutlined)" class="search" type="primary">搜索</a-button>
            <a-button  class="signIn" type="primary">登录</a-button>
            <a-button  class="signOut" type="primary">登出</a-button>
            <a-avatar :size="40" class="head" scr>
               <template #icon><UserOutlined /></template>
            </a-avatar>
            <a-divider style="height: 2px; background-color: #cbcbcb" />
          <!-- <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb> -->
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <div v-if="selectedKeys[0] ==='camera'">
                <TableCamera></TableCamera>
            </div>
            <div v-else-if="selectedKeys[0] ==='sensor'">
                <TableSensor></TableSensor>
            </div>
            <div v-else-if="selectedKeys[0] ==='3'">
                <TableSensor1></TableSensor1>
            </div>
            <div v-else-if="selectedKeys[0] ==='pos'">
                <TablePos></TablePos>
            </div>
            <div v-else-if="selectedKeys[0] ==='TBM'">
                <TableTBM></TableTBM>
            </div>
            <div v-else-if="selectedKeys[0] ==='5'">
                <TableTBM1></TableTBM1>
            </div>
            <div v-else-if="selectedKeys[0] ==='b1'">
                <TableVideo></TableVideo>
            </div>
            <div v-else-if="selectedKeys[0] ==='b4'">
                <TableVideo1></TableVideo1>
            </div>
            <div v-else-if="selectedKeys[0] ==='b6'">
                <TableVideo2></TableVideo2>
            </div>
            <div v-else-if="selectedKeys[0] ==='4'">
                <TablePos1></TablePos1>
            </div>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          数据看板原型 ©2023 Created by chu
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
<script lang="ts" setup>
  import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    CloudDownloadOutlined,
    EyeFilled,
    EyeInvisibleFilled
  } from '@ant-design/icons-vue';
  import { ref ,h} from 'vue';
  import  TableCamera from './TableCamera.vue'
  import  TableSensor from './TableSensor.vue'
  import  TableSensor1 from './TableSensor1.vue'
  import  TablePos from './TablePos.vue'
  import  TablePos1 from './TablePos1.vue'
  import  TableTBM from './TableTBM.vue'
  import  TableTBM1 from './TableTBM1.vue'
  import  TableVideo from './TableVideo.vue'
  import  TableVideo1 from './TableVideo1.vue'
  import  TableVideo2 from './TableVideo2.vue'
  import { SearchOutlined } from '@ant-design/icons-vue';

  const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(['1']);
  </script>
  <style scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(222, 190, 190, 0.3);
  }
  
  .head{
    top:15px;
    left: 80%;
  }
  .search{
    top:15px;
    left: 76%;
  }
  .signIn{
    top:15px;
    left: 77%;
  }
  .signOut{
    top:15px;
    left: 78%;
  }
  [data-theme='#004898'] .site-layout .site-layout-background {
    background: #004898;
  }
  </style>
  