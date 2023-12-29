import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Radio } from 'antd';
import request from 'umi-request';

export default function Index() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: '吃饭',
      completed: false
    },
    {
      id: 2,
      name: '睡觉',
      completed: true
    },
    {
      id: 2,
      name: '打豆豆',
      completed: false
    }
  ]);

  // 请求数据
  useEffect(() => {
    request('/api/todos', { method: 'GET' });
  }, []);

  const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
    return (
      <div className={styles.todoItem} key={index}>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={todo.completed ? 1: 0} onChange={}></Radio>
        </Radio.Group>
        <div className={`${styles.name} ${todo.completed && styles.strikethrough}`}>{todo.name}</div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        {todos.map((item, index) => (
          <TodoItem todo={item} index={index} />
        ))}
      </div>
    </>
  );
}
