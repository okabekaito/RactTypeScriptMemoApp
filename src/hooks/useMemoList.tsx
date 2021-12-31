import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    if (text === "") return;
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
  };

  const deleteTodo = useCallback(
    (index: number) => {
      const deleteMemo = [...memos];
      deleteMemo.splice(index, 1);
      setMemos(deleteMemo);
    },
    [memos]
  );
  return { memos, addTodo, deleteTodo };
};
