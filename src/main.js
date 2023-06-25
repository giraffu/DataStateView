/*
 * @Author: chuzeyu 3343447088@qq.com
 * @Date: 2023-06-21 17:26:24
 * @LastEditors: chuzeyu 3343447088@qq.com
 * @LastEditTime: 2023-06-25 09:13:45
 * @FilePath: \DataStateView\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(Antd).mount('#app');