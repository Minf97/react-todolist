import React from 'react';
import Sidebar from '@/components/Sidebar';
import ChatBar from '@/components/ChatBar';
import styles from './index.module.scss';

function Index() {
  console.log(window.ipcRenderer);

  return (
    <>
      <div className={styles.container}>
        <div className="flex">
          <div className={`${styles.sidebar}`}>
            <Sidebar></Sidebar>
          </div>
          <div className={styles.body}>
            <ChatBar></ChatBar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
