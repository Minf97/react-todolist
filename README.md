# React-Electron-Template

# 简介

一个基于react18和electron的模板项目，包含了常用的状态管理和UI库，可以直接使用。

# 状态管理

react的常用状态管理有：redux, mobx, hox, zustand <br/>
redux又二次封装得到：redux tookit, dva, rematch <br/>
<br/>
由于我是从vue3转过来的，期望对齐vue3的`pinia`，尽可能做到统一，降低学习成本。<br/>
看了许多状态管理库，经过筛选，最后锁定在`zustand`和`hox`，再仔细对比后选择了`hox`

# 项目结构
vite-reactts-electron-starter  
├─ electron    //          electron相关配置<br/>
├─ main                 // electron打包产物<br/>
├─ src                         // 主要代码入口<br/>
│  ├─ api                 // 服务器接口api<br/>
│  ├─ common                    // 静态资源<br/>
│  │  ├─ images  
│  │  └─ styles                // 全局样式<br/>
│  ├─ components                 // 组件<br/>
│  ├─ pages                     // 页面    <br/>
│  ├─ router                  // 路由<br/>
│  ├─ store                   // 状态管理器<br/>
│  ├─ types                  // TS类型  <br/>
│  ├─ App.tsx                 
│  ├─ index.html               
│  ├─ index.scss               
│  └─ main.tsx               // 入口文件  
├─ LICENSE.md                  
├─ package.json                
├─ pnpm-lock.yaml              
├─ postcss.config.js           
├─ README.md                   
├─ tailwind.config.js          
├─ tsconfig.json               
├─ vite.config.ts              
└─ yarn.lock                   

# 快速开始
1. **克隆仓库**
```bash
git clone https://github.com/Minf97/electron-react-vite.git
```
2. 安装依赖
```bash
// cnpm i 或者 yarn都可
// 似乎npm和cnpm会有node报错问题，建议pnpm
pnpm install
```
3. 运行项目
```bash
npm run dev
```


# 技术栈

- 构建工具：vite
- 框架和语言：electron + react + typescript
- hooks： [ahooks](https://ahooks.js.org/zh-CN/)
- 状态管理：~~[hox](https://hox.js.org/zh/guide/quick-start)~~ [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- 第三方库：
  - [tailwind原子CSS](https://tailwindcss.com/)
  - [frame motion动效库](https://www.framer.com/motion/)
  - [antd组件库](https://ant-design.antgroup.com/index-cn)
  - [antd-pro中后台组件库](https://procomponents.ant.design/)
  - swr数据获取和缓存(暂未使用，未来考虑加入)
  - [umi-request网络请求库](https://github.com/umijs/umi-request/blob/master/README_zh-CN.md)
- UI库：[iconpark字节UI库](https://bytedance.larkoffice.com/wiki/wikcnrOVHCJQ4V3a7mDvmLjrePf) + @antd/icons
- 中间件：CSS Modules + postCSS

# 参考文章

- [antd与tailwind样式冲突](https://kong.vision/react/antd%E4%B8%8Etailwindcss%E6%A0%B7%E5%BC%8F%E5%86%B2%E7%AA%81/)
- [electron圆角](https://www.jianshu.com/p/c4bb54f4962c)
- [antdButton自定义波纹](https://ant-design.antgroup.com/components/config-provider-cn#config-provider-demo-wave)
- [antd切换暗色主题](https://github.com/ant-design/ant-design/discussions/46917)
- [zustand入门(上)](https://juejin.cn/post/7177216308843380797?searchId=202401101048001D1890ABA4F37EF88767)  [zustand入门(下)](https://juejin.cn/post/7182462103297458236?searchId=202401101048001D1890ABA4F37EF88767)
- [antd国际化](https://pro.ant.design/zh-CN/docs/i18n/)

# 踩坑记录
1. 调整`antdIcon`大小需要调整`fontSize`而不是宽高
2. 如何高度自定义修改antd5样式？`:global` `魔改`
3. 如何在 `Button` 中加入两个`Icon` ？ 他的Icon属性接收一个`reactNode`
4. 关于toolbar的封装使用
5. 全局CP组件注入色阶
6. [使用designToken变量](https://ant-design.antgroup.com/docs/react/customize-theme-cn#%E4%BF%AE%E6%94%B9%E4%B8%BB%E9%A2%98%E5%8F%98%E9%87%8F)
7. [太帅了！自动生成颜色算法](https://ant-design.antgroup.com/docs/react/customize-theme-cn#%E5%9F%BA%E7%A1%80%E5%8F%98%E9%87%8Fseed-token)