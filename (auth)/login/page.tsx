"use client";
import speedat from "@/public/speedat.svg"
import { ChevronLeft, Eye, EyeOff, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleKeepLoggedIn = () => {
    setKeepLoggedIn((prevKeepLoggedIn) => !prevKeepLoggedIn);
  };

  const handleLogin = () => {
    console.log("로그인 시도:", { email, password, keepLoggedIn });
  };

  return (
    <>
      <div className="h-[100vh] bg-yellow-500 relative">
        <div className="w-[120px] h-[120px] p-[24px] flex justify-center items-center absolute top-[20px] left-[20px]">
          <ChevronLeft className="w-[100%] h-[100%] text-white" />
        </div>
        <div className="w-[460px] h-[600px] bg-white rounded-[10px] absolute top-[180px] left-[1200px] flex flex-col items-center">
          <div className="w-[460px] h-[170px] flex justify-center items-">
            <Image src={speedat} width={165} height={60} alt="speedat 로고" />
          </div>
          <div className="w-[400px] h-[64px] border-[2px] m-1 border-gray-300 rounded-[10px] flex items-center">
            <input
              className="w-full h-full pl-4 rounded-[10px] placeholder-opacity-50 text-[15px]"
              type="text"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="w-[400px] h-[64px] border-[2px] m-1 border-gray-300 rounded-[10px] flex items-center relative">
            <input
              className="w-full h-full pl-4 rounded-[10px] placeholder-opacity-50 text-[15px]"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="absolute right-[10px] top-[50%] transform -translate-y-[50%]"
              onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="w-[400px] h-[40px] m-1 rounded-[10px] flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={toggleKeepLoggedIn}>
              <Circle
                className={`mr-2 ${keepLoggedIn ? "text-yellow-500" : "text-gray-500"}`}
                size={20}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ fill: keepLoggedIn ? "#FFD700" : "none" }}
              />
              <span>로그인 유지</span>
            </div>
            <label className="relative right-[10px] text-center text-[13px] underline">
              임시 비밀번호 발급
            </label>
          </div>
          <div className="w-[400px] h-[60px] bg-yellow-400 hover:bg-yellow-500 m-10 border-darkgray rounded-[10px] flex justify-center items-center">
            <button
              className="text-center font-bold text-[20px] text-white w-full h-full"
              onClick={handleLogin}>
              로그인
            </button>
          </div>
          <div className="w-[400px] h-[20px] rounded-[10px] flex justify-center items-center">
            <label className="text-center text-[13px] font-bold">계정이 없으신가요?</label>
            <label className="relative left-[10px] text-center text-[13px] underline text-yellow-400 cursor-pointer font-bold">
              <Link href={"/signup"}>회원가입</Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
