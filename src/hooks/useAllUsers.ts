import { User } from '@/types/user';
import axios from 'axios';
import { useCallback, useState } from 'react';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(() => {
        console.error('ユーザーの取得に失敗しました')
      }).finally(() => setLoading(false));
  }, []); // 関数が再生成されてレンダリングが走らないように一度だけ生成
  return { getUsers, loading, users };
};
