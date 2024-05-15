import React, { useState } from 'react'

export default function Function() {
    const [fullName,setFullname] = useState<string>("hoa");
    const [age,setAge]=useState<number>(13);
    const [students,setStudent]=useState<string[]>([]);
    const [isActive,setIsActive]=useState<boolean>(true);
    //const fullName:string="hoa"
    const handleChange=()=>{
        setAge(14);
        setFullname("hồng")
    }
  return (
    <div>Function
        {/* 
        State : dùng để quản lí dữ liệu trong component
        Đối với function để quản lý dữ liệu dùng useState
        đây là 1 hook sinh ra giúp function có thể quản lý dữ liệu
        */}
        {/* Hiển thị */}
        <p>{fullName} năm nay {age} tuổi</p>
        <button onClick={handleChange}>change age</button>
    </div>
  )
}
