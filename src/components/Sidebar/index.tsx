import React from 'react';
import styles from './index.module.scss';
import TagList from '@/components/TagList';
import CheckList from '@/components/CheckList';
import { useStore } from '@/store';
import { Layout } from 'antd';
import { Moon, SunOne } from '@icon-park/react';

const ThemeModeIcon = () => {
  const { themeMode } = useStore();
  return themeMode === 'dark' ? (
    <SunOne
      onClick={() => useStore.setState({ themeMode: 'light' })}
      theme="outline"
      size="20"
      fill="#787486"
      strokeWidth={3}
    />
  ) : (
    <Moon
      onClick={() => useStore.setState({ themeMode: 'dark' })}
      theme="outline"
      size="20"
      fill="#787486"
      strokeWidth={3}
    />
  );
};

export default function Index() {
  return (
    <>
      <div className={styles.container}>
        {/* 暗夜模式/设置 */}
        <Layout className="flex justify-end">
          <ThemeModeIcon></ThemeModeIcon>
        </Layout>
        {/* 标签栏 */}
        <TagList></TagList>
        {/* 文字 */}
        <Layout className={styles.txt}>
          <Layout className={styles.title}>公告栏</Layout>
          <Layout className={styles.content}>在这里可以总览并修改你的todolist~ </Layout>
        </Layout>
        {/* todolist */}
        <div className={styles.todoTitle}>todolist</div>
        <CheckList></CheckList>
      </div>
    </>
  );
}
