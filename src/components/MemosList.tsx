import { FC } from "react";

type Props = {
  memos: string[];
  onclickDelete: (index: number) => void;
};
export const MemosList: FC<Props> = (props) => {
  const { memos, onclickDelete } = props;
  return (
    <div className="memo-list">
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <p>{memo}</p>
            <button onClick={() => onclickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
