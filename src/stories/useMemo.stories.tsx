import React, { ChangeEvent, useCallback, useMemo, useState } from "react";

export default {
  title: "UseMemo demo",
};

export function DifficulteCountingExample() {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResult = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResult = tempResult * i;
    }
    return tempResult;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  );
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("USERS SECRET");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
  console.log("EXAMPLE");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["a", "bad", "casda", "dfdfdf", "f"]);

  const newUsers = useMemo(() => {
    return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <Users users={newUsers} />
      <button onClick={() => setUsers([...users, "sveta"])}>add</button>
    </>
  );
};

export const LikeUseCallback = () => {
  console.log("LikeUseCallback");
  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "HTML", "Css"]);

  const memoizedAddBook = useCallback(() => {
    console.log(books);
    const newBooks = [...books, "Angular" + new Date().getTime()];
    setBooks(newBooks);
  }, [books]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Book addBook={memoizedAddBook} />
    </>
  );
};

const BookSecret = (props: { addBook: () => void }) => {
  console.log("Books SECRET");
  return (
    <div>
      <button onClick={props.addBook}>add</button>
    </div>
  );
};

const Book = React.memo(BookSecret);
