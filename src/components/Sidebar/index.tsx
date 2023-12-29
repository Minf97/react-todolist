import React from 'react';
import styles from './index.module.scss';
import TagList from '@/components/TagList';
import CheckList from '@/components/CheckList';

import { AllApplication, Comment, Peoples, Config, Add } from '@icon-park/react';

export default function Index() {
  return (
    <>
      <div className={styles.container}>
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
