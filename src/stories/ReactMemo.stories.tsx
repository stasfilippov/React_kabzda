import React, { useState } from "react";
export default {
  title: "ReactMemo demo",
};

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("USERS");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
  console.log("EXAMPLE");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["a", "b", "c", "d", "f"]);

  const addUser = () => {
    const newUser = "misha" + new Date().getTime();
    setUsers([...users, newUser]);
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessagesCounter count={count} />
      <Users users={users} />
    </>
  );
};
