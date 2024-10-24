'use client';

import React from 'react';
import { useState } from 'react';

// const onClickButon = () => {
//   alert('ボタン押されたよ');
// };

const MainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (indexToDelete: number) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <div>今週のトレーニング目標</div>
      <li>胸トレ</li>
      <li>ベンチプレス 50kg*10</li>
      <li>ベンチプレス 50kg*10</li>
      <li>ベンチプレス 50kg*10</li>
      <li>ベンチプレス 50kg*10</li>
      <div>今日のトレーニング記録</div>
      {/* 入力する項目 */}
      <div>
        <input
          className="border"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="トレーニングを入力"
        />
        <button onClick={handleAddItem}>追加</button>
      </div>
      <div>追加ボタン押されたらここに追加していくようにする</div>
      <div className="display flex">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>{item}</li>
            <button className="border">編集</button>
            <button className="border" onClick={() => handleDeleteItem(index)}>
              削除
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
