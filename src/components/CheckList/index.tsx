import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import type { RadioChangeEvent } from 'antd';
import { Radio, ConfigProvider, Typography } from 'antd';
import request from 'umi-request';
const {Text} = Typography
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

  const TodoItem = ({ todo }: { todo: Todo }) => {
    const [flag, setFlag] = useState(todo.completed);
    console.log(flag, todo.name);

    return (
      <div className={styles.todoItem}>
        <ConfigProvider
          theme={{
            cssVar: true,
            token: {
              // colorPrimary: '#7b68ee' 
            }
          }}
        >
          <Radio.Group
            name="radiogroup"
            defaultValue={flag}
            onChange={({ target: { checked } }: RadioChangeEvent) => setFlag(checked)}
          >
            <Radio checked={flag} onClick={() => console.log(flag)} className={styles.radio}></Radio>
          </Radio.Group>
        </ConfigProvider>
        <Text className={`${styles.name} ${flag && styles.strikethrough}`}>{todo.name}</Text>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        {todos.map((item, index) => (
          <TodoItem todo={item} key={index} />
        ))}
      </div>
    </>
  );
}
