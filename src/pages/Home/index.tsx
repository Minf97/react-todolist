import React from 'react';
import Sidebar from '@/components/Sidebar';
import ChatBar from '@/components/ChatBar';
import styles from './index.module.scss';
import { Layout } from 'antd';

function Index() {
  console.log(window.ipcRenderer);
  return (
    <>
      <div className={styles.container}>
        <div className="flex">
          <Layout className={styles.sidebar}>
            <Sidebar></Sidebar>
          </Layout>
          <Layout className={styles.body}>
            <ChatBar></ChatBar>
          </Layout>
        </div>
      </div>
    </>
  );
}

export default Index;
