import React from 'react';
import styles from './sendBar.module.scss';
import { Input, Flex, Divider, Button, theme } from 'antd';
import { Config, Magic, Send } from '@icon-park/react';
import ToolBar from '../toolBar';
import { useStore } from '@/store';

const { TextArea } = Input;

export default () => {
  const { token } = theme.useToken();
  const { themeMode } = useStore();
  console.log(token, 233);
  const btnList = [
    {
      icon: <Config theme="outline" size="16" fill={themeMode === 'dark' ? '#787486' : '#2e2e2e'} strokeWidth={3} />,
      text: '设置'
    },
    {
      icon: <Magic theme="outline" size="16" fill={themeMode === 'dark' ? '#787486' : '#2e2e2e'} strokeWidth={3} />,
      text: '快捷指令'
    }
  ];
  return (
    <Flex vertical style={{ paddingBottom: '30px', width: '100%', backgroundColor: token.Layout?.bodyBg }}>
      <Divider></Divider>
      {/* 工具栏 */}
      <div style={{ marginBottom: '10px' }}>
        <ToolBar toolList={btnList}></ToolBar>
      </div>
      {/* 输入框 */}
      <Flex className={`${styles.inputBar} relative`}>
        <TextArea
          className={`${styles.textBox}`}
          placeholder="Enter 发送，Shift + Enter 换行"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <Button
          type="primary"
          icon={<Send theme="outline" size="20" fill="#fff" strokeWidth={3} />}
          className={`${styles.submit} z-10`}
        >
          发送
        </Button>
      </Flex>
    </Flex>
  );
};
