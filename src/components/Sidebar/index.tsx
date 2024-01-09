import React from 'react';
import styles from './index.module.scss';
import TagList from '@/components/TagList';
import CheckList from '@/components/CheckList';

import { Moon, SunOne } from '@icon-park/react';

const ThemeModeIcon = ({ mode = true }) => {
  return mode ? (
    <SunOne theme="outline" size="20" fill="#787486" strokeWidth={3} />
  ) : (
    <Moon theme="outline" size="20" fill="#787486" strokeWidth={3} />
  );
};

export default function Index() {
  return (
    <>
      <div className={styles.container}>
        {/* 暗夜模式/设置 */}
        <div className="flex justify-end">
          <ThemeModeIcon mode={true}></ThemeModeIcon>
        </div>
        {/* 标签栏 */}
        <TagList></TagList>
        {/* 文字 */}
        <div className={styles.txt}>
          <div className={styles.title}>公告栏</div>
          <div className={styles.content}>在这里可以总览并修改你的todolist~ </div>
        </div>
        {/* todolist */}
        <div className={styles.todoTitle}>todolist</div>
        <CheckList></CheckList>
      </div>
    </>
  );
}
