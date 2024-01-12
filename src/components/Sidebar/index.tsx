import React from 'react';
import styles from './index.module.scss';
import TagList from '@/components/TagList';
import CheckList from '@/components/CheckList';
import { useStore } from '@/store';
import { Flex, Typography, Button } from 'antd';
import { Moon, SunOne } from '@icon-park/react';

const { Text } = Typography;

const ThemeModeIcon = () => {
  const { themeMode } = useStore();
  return themeMode === 'dark' ? (
    <Button
      className="w-8 flex-center"
      onClick={() => useStore.setState({ themeMode: 'light' })}
      icon={<SunOne theme="outline" size="20" fill="#787486" strokeWidth={3} />}
      type="text"
    />
  ) : (
    <Button
      className="w-8 flex-center"
      onClick={() => useStore.setState({ themeMode: 'dark' })}
      icon={<Moon theme="outline" size="20" fill="#787486" strokeWidth={3} />}
      type="text"
    />
  );
};

export default function Index() {
  return (
    <>
      <div className={styles.container}>
        {/* 暗夜模式/设置 */}
        <Flex className="flex justify-end">
          <ThemeModeIcon></ThemeModeIcon>
        </Flex>
        {/* 标签栏 */}
        <TagList></TagList>
        {/* 公告栏 */}
        <Flex className={styles.txt} vertical>
          <Text className={styles.title}>公告栏</Text>
          <Text className={styles.content}>在这里可以总览并修改你的todolist~ </Text>
        </Flex>
        {/* todolist */}
        <CheckList></CheckList>
      </div>
    </>
  );
}
