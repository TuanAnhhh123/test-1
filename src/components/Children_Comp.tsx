import React from 'react';

interface ChildrenProps {
  name: string;
}

const Children_Comp: React.FC<ChildrenProps> = ({ name }) => {
  return (
    <div>
      <h2>Children Component</h2>
      <p>Họ và Tên: {name}</p>
    </div>
  );
}

export default Children_Comp;

