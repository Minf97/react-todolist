import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button, Flex, Radio, ConfigProvider, Typography } from 'antd';
import request from 'umi-request';
import { AddThree } from '@icon-park/react';

const { Text } = Typography;
export default () => {
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
    const onClick = () => {
      console.log(flag);
      setFlag(!flag);
    };
    return (
      <div className={styles.todoItem}>
        <Radio checked={flag} onClick={onClick}></Radio>
        <Text className={`${styles.name} ${flag && styles.strikethrough}`}>{todo.name}</Text>
      </div>
    );
  };

  return (
    <>
      {/* 标题 */}
      <Flex className="justify-between">
        <Text className={styles.todoTitle}>todolist</Text>
        <Button
          className="w-8 flex-center"
          icon={<AddThree theme="outline" size="20" fill="#787486" strokeWidth={3} />}
          type="text"
        />
      </Flex>
      {/* todolist列表 */}
      <div className={styles.container}>
        {todos.map((item, index) => (
          <TodoItem todo={item} key={index} />
        ))}
      </div>
    </>
  );
};
