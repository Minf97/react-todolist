import React, { useRef, useEffect, useMemo } from 'react';
import styles from './index.module.scss';
import { Input, Flex, Button, Avatar, theme } from 'antd';
import GptIcon from '@/common/images/gpt.png';
import { useHover } from 'ahooks';
import { EditTwo, Copy, DeleteThemes } from '@icon-park/react';
import dayjs from 'dayjs';
import SendBar from './sendBar';
import ToolBar from '../toolBar';
import { useStore } from '@/store';

const MessageBox = ({ message }: { message: Message }) => {
  const { themeMode } = useStore();

  const MyChat = ({ message }: { message: Message }) => {
    const avatarRef = useRef(null);
    const isHovering = useHover(avatarRef);
    const time = dayjs(message.timeStamp).format('YYYY-MM-DD HH:mm:ss');
    return (
      <Flex className="justify-end flex-wrap mb-3">
        {/* 头像 */}
        <Flex vertical className={`${styles.contentBox} justify-end`} style={{ alignItems: 'flex-end' }}>
          <Button className={`w-8 flex-center ${styles.myAvatar}`}>😀</Button>
          {/* 内容框 */}
          <div
            className={styles.content}
            style={{
              backgroundColor: themeMode === 'dark' ? '#1c1c1c' : '#f2f2f2',
              color: themeMode === 'dark' ? '#c9d1d9' : '#000',
              borderColor: themeMode === 'dark' ? '#3c3c3c' : '#dedede'
            }}
          >
            {message.content}
          </div>
          {/* 时间 */}
          <div className={`${styles.time} text-right`} style={{ color: themeMode === 'dark' ? '#3c3c3c' : '#ccc' }}>{time}</div>
        </Flex>
      </Flex>
    );
  };

  const OtherChat = ({ message }: { message: Message }) => {
    const { token } = theme.useToken();
    console.log(token);

    const avatarRef = useRef(null);
    const isHovering = useHover(avatarRef);
    const time = dayjs(message.timeStamp).format('YYYY-MM-DD HH:mm:ss');
    const TwoIcon = ({ isHovering }: { isHovering: boolean }) => {
      return (
        <Flex>
          <img
            src={GptIcon}
            width="100%"
            height="100%"
            className="transition-opacity"
            style={{ opacity: isHovering ? 0.1 : 1 }}
          />
          <EditTwo
            theme="outline"
            size="20"
            fill="#787486"
            strokeWidth={3}
            className={`${styles.edit} transition-opacity`}
            style={{ opacity: isHovering ? 1 : 0 }}
          />
        </Flex>
      );
    };
    const toolList = [
      {
        icon: <Copy theme="outline" size="16" fill={themeMode === 'dark' ? '#787486' : '#2e2e2e'} strokeWidth={3} />,
        text: '复制'
      },
      {
        icon: (
          <DeleteThemes theme="outline" size="16" fill={themeMode === 'dark' ? '#787486' : '#2e2e2e'} strokeWidth={3} />
        ),
        text: '删除'
      }
    ];
    return (
      <Flex vertical ref={avatarRef} className="mb-3">
        {/* 头像 */}
        <Flex>
          <Button
            className={`w-8 flex-center ${styles.myAvatar} overflow-hidden`}
            type="text"
            icon={<TwoIcon isHovering={isHovering} />}
          ></Button>
          <div style={{ display: isHovering ? 'block' : 'none', transition: 'all ease 0.1s' }}>
            <ToolBar toolList={toolList}></ToolBar>
          </div>
        </Flex>

        <Flex vertical className={styles.contentBox} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          {/* 内容框 */}
          <div
            className={styles.content}
            style={{
              backgroundColor: themeMode === 'dark' ? '#1c1c1c' : '#f2f2f2',
              color: themeMode === 'dark' ? '#c9d1d9' : '#000',
              borderColor: themeMode === 'dark' ? '#3c3c3c' : '#dedede'
            }}
          >
            {message.content}
          </div>
          {/* 时间 */}
          <div className={`${styles.time} text-right`} style={{ color: themeMode === 'dark' ? '#3c3c3c' : '#ccc' }}>
            {time}
          </div>
        </Flex>
      </Flex>
    );
  };

  return message.account === 'me' ? <MyChat message={message} /> : <OtherChat message={message} />;
};

export default () => {
  const mock = [
    {
      id: 1,
      account: 'me',
      content:
        '测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度',
      timeStamp: Date.now()
    },
    {
      id: 2,
      account: 'admin',
      content:
        '测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度测试长度',
      timeStamp: Date.now()
    },
    {
      id: 3,
      account: 'admin',
      content: '123',
      timeStamp: Date.now()
    },
    {
      id: 4,
      account: 'me',
      content: '666',
      timeStamp: Date.now()
    }
  ];
  return (
    <>
      <Flex vertical className={styles.chatBox}>
        {/* 聊天记录 */}
        {mock.map((item, index) => (
          <MessageBox key={index} message={item}></MessageBox>
        ))}
      </Flex>
      {/* 输入框 */}
      <Flex className={styles.sendBar}>
        <SendBar></SendBar>
      </Flex>
    </>
  );
};
