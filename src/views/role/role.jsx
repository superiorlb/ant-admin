import React from "react";
import { Empty, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { add, cut } from "../../store/counterSlice";
export default function Role() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => dispatch(add())}>加</Button>
      <Button onClick={() => dispatch(cut())}>减</Button>
      {/* <Empty /> */}
    </div>
  );
}
