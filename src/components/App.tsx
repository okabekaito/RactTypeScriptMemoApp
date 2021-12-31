import { ChangeEvent, useCallback, useState } from "react";
import "../styles.css";
import { MemosList } from "../components/MemosList";
import { useMemoList } from "../hooks/useMemoList";

export const App = () => {
  const [text, setText] = useState<string>("");

  const { memos, addTodo, deleteTodo } = useMemoList();

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onclickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <div className="input-Area">
        <input
          onChange={onChangeText}
          value={text}
          placeholder="入力してください"
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <MemosList memos={memos} onclickDelete={onclickDelete} />
    </div>
  );
};
