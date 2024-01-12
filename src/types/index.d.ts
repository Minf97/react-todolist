

interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

type ThemeMode = "light" | "dark"


interface Message {
  id: number
  /** 账号 */
  account: string
  /** 内容 */
  content: string
  /** 时间戳 */
  timeStamp: number
}