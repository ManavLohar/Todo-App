import React, { useState, useEffect } from "react";
import "./Task.css";

const Task = () => {
  const arr = [
    { value: 1, background: true },
    { value: 2, background: true },
    { value: 3, background: true },
    { value: 4, background: true },
    { value: 5, background: true },
    { value: 6, background: true },
    { value: 7, background: true },
    { value: 8, background: true },
    { value: 9, background: true },
  ];
  const [item, setItem] = useState(arr);
  const [reverseOrder, setReverseOrder] = useState([]);

  const handleClick = (e, value) => {
    const index = item.findIndex((item) => {
      return item.value === value;
    });

    setReverseOrder([...reverseOrder, index]);

    const items = [...item];
    items[index].background = !items[index].background;
    setItem(items);
  };

  useEffect(() => {
    if (item.every((i) => !i.background)) {
      let delay = 0;
      reverseOrder.forEach((index) => {
        setTimeout(() => {
          const items = [...item];
          items[index].background = true;
          setItem(items);
        }, (delay += 2000));
      });
      reverseOrder.length = 0;
    }
  }, [item]);

  return (
    <div className="task-box">
      {item &&
        item.map((item, index) => (
          <div
            className="task-item"
            style={{ background: item.background ? "white" : "blue" }}
            onClick={(e) => handleClick(e, item.value)}
            key={index}
          >
            {item.value}
          </div>
        ))}

      {/* <div className="task-item">2</div>
      <div className="task-item">3</div>
      <div className="task-item">4</div>
      <div className="task-item">5</div>
      <div className="task-item">6</div>
      <div className="task-item">7</div>
      <div className="task-item">8</div>
      <div className="task-item">9</div> */}
    </div>
  );
};

export default Task;
