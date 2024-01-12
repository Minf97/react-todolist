import React, { useRef, useEffect } from 'react';
import styles from './index.module.scss';
import { Input, Flex, Button, Avatar } from 'antd';
import GptIcon from '@/common/images/gpt.png';
import { useHover } from 'ahooks';
import { EditTwo } from '@icon-park/react';
import dayjs from 'dayjs';

const MessageBox = ({ message }: { message: Message }) => {
  const MyChat = ({ message }: { message: Message }) => {
    const avatarRef = useRef(null);
    const isHovering = useHover(avatarRef);
    const time = dayjs(message.timeStamp).format('YYYY-MM-DD HH:mm:ss');
    return (
      <Flex className="justify-end flex-wrap">
        {/* 头像 */}
        <Flex vertical className={`${styles.contentBox} justify-end`} style={{ alignItems: 'flex-end' }}>
          <Button className={`w-8 flex-center ${styles.myAvatar}`} >
            😀
          </Button>
          {/* 内容框 */}
          <div className={styles.content}>{message.content}</div>
          {/* 时间 */}
          <div className={`${styles.time} text-right`}>{time}</div>
        </Flex>
      </Flex>
    );
  };

  const OtherChat = ({ message }: { message: Message }) => {
    const avatarRef = useRef(null);
    const isHovering = useHover(avatarRef);
    const time = dayjs(message.timeStamp).format('YYYY-MM-DD HH:mm:ss');
    return (
      <>
        {/* 头像 */}
        <Avatar
          ref={avatarRef}
          className={`${styles.avatar} cursor-pointer`}
          shape="square"
          src={
            isHovering ? (
              <Button type="text" icon={<EditTwo theme="outline" size="20" fill="#787486" strokeWidth={3} />}></Button>
            ) : (
              GptIcon
            )
          }
        />

        <Flex vertical className={styles.contentBox} style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          {/* 内容框 */}
          <div className={styles.content}>{message.content}</div>
          {/* 时间 */}
          <div className={`${styles.time} text-right`}>{time}</div>
        </Flex>
      </>
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
      {mock.map((item, index) => (
        <MessageBox key={index} message={item}></MessageBox>
      ))}
      {/* <MessageBox></MessageBox> */}
    </>
  );
};
