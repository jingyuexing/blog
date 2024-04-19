import React, { createContext, useContext, useState } from 'react';

// 创建一个 Context
const MyContext = createContext();

// 提供者组件
const MyProvider = ({ children }) => {
  // 使用useState来管理Context的值
  const [contextValue, setContextValue] = useState('Initial Value');

  // 用于修改Context值的函数
  const updateContextValue = (newValue) => {
    setContextValue(newValue);
  };

  return (
    <MyContext.Provider value={{ contextValue, updateContextValue }}>
      {children}
    </MyContext.Provider>
  );
};

// 消费者组件
const MyComponent = () => {
  const { contextValue, updateContextValue } = useContext(MyContext);

  const handleClick = () => {
    // 在此调用提供的函数来修改Context的值
    updateContextValue('New Value');
  };

  return (
    <div>
      <p>Context Value: {contextValue}</p>
      <button onClick={handleClick}>Update Context Value</button>
    </div>
  );
};

// 应用的根组件
const TabTest = () => {
  return (
    <MyProvider>
      <div>
        <MyComponent />
      </div>
    </MyProvider>
  );
};

export default TabTest;
