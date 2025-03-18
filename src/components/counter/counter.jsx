import { useState } from 'react';
import s from './counter.module.css';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={s.container}>
            <h1>{count}</h1>
            <button className={s.add} onClick={() => setCount(count + 1)}>+1</button>
            <button className={s.reduce} onClick={() => setCount(count - 1)}>-1</button>
            <button className={s.reset} onClick={() => setCount(0)}>reset</button>
        </div>
    );
}