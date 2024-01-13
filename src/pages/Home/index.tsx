import React from 'react';
import Sidebar from '@/components/Sidebar';
import ChatBar from '@/components/ChatBar';
import styles from './index.module.scss';
import { Layout, ConfigProvider, theme } from 'antd';
import { useStore } from '@/store';

const { useToken, defaultSeed } = theme;

function Index() {
  const { themeMode } = useStore();
  const { token, theme } = useToken();
  // console.log(token, theme, defaultSeed);
  
  return (
    <>
      <div className={styles.container}>
        <div className="flex">
          {/* 侧边栏 - todolist */}
          <ConfigProvider
            theme={{
              components: {
                Layout: {
                  bodyBg: themeMode === 'dark' ? '#1e1e1e' : '#f5f5f5'
                }
              }
            }}
          >
            <Layout className={styles.sidebar}>
              <Sidebar></Sidebar>
            </Layout>
          </ConfigProvider>

          {/* GPT - 聊天框 */}
          <ConfigProvider
            theme={{
              components: {
                Layout: {
                  bodyBg: themeMode === 'dark' ? '#212121' : '#fafafc'
                }
              }
            }}
          >
            <Layout className={styles.body}>
              <ChatBar></ChatBar>
            </Layout>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}

export default Index;
