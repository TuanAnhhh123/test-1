import React, { useState } from 'react';

const Exercise02 = () => {
  const [id, setId] = useState('1');
  const [name, setName] = useState('Nguyễn Văn Sơn');
  const [dob, setDob] = useState('20/12/2023');
  const [address, setAddress] = useState('Thanh Xuân , Hà Nội');

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Tên:</strong> {name}</p>
      <p><strong>Ngày sinh:</strong> {dob}</p>
      <p><strong>Địa chỉ:</strong> {address}</p>
    </div>
  );
}

export default Exercise02;

