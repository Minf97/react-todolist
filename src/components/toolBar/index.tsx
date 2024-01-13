import React from 'react';
import styles from './index.module.scss';
import { Flex, Button, ConfigProvider } from 'antd';

export default ({ toolList }: { toolList: { icon: React.ReactNode; text: string }[] }) => {
  return (
    <>
      {/* 工具栏 */}
      <Flex className={styles.toolBar} align='center'>
        <ConfigProvider
          theme={{
            token: {
              controlHeightSM: 26
            }
          }}
        >
          {toolList.map((item, index) => (
            <Button icon={item.icon} key={index} shape="round" size="small" style={{ marginRight: '10px' }}></Button>
          ))}
        </ConfigProvider>
      </Flex>
    </>
  );
};
