import React from 'react';
import {createRoot} from 'react-dom/client';
import { globalRouters } from './router';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme, App } from 'antd';
import { useStore } from './store/index';
import AppBar from '@/components/AppBar';
import './index.scss';

const MyApp = () => {
  const { themeMode } = useStore();
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        algorithm: themeMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
        components: {
          Input: {
            activeBorderColor: '#7b68ee',
            algorithm: true, // 启用算法
          }
        },
        token: {
          colorPrimary: '7b68ee',
          // 分割线
          // colorSplit: '#DBDBDB',
          // colorPrimaryHover: '#7b68ee',
        }
      }}
    >
      <React.StrictMode>
        <div id="win">
          {/* Bar顶部 */}
          {window.Main && <AppBar />}
          {/* 路由 */}
          <RouterProvider router={globalRouters}></RouterProvider>
        </div>
      </React.StrictMode>
    </ConfigProvider>
  );
};
// @ts-ignore
createRoot(document.getElementById('root')).render(
  <App>
    <MyApp />
  </App>
);
