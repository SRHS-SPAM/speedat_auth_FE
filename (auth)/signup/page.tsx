"use client";
import speedat from "@/public/speedat.svg";
import { ChevronLeft, Eye, EyeOff, Square } from "lucide-react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
  return (
    <div onClick={onChange} className="cursor-pointer">
      <Square
        className={`mr-2 ${checked ? "text-yellow-500" : "text-gray-500"}`}
        size={20}
        style={{ fill: checked ? "#FFD700" : "none" }}
      />
    </div>
  );
};

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGradeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGrade(e.target.value);
  };

  const handleClassRoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClassRoom(e.target.value);
  };

  const handleClassNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClassNumber(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleAgreementChange = () => {
    setAgreementChecked((prevChecked) => !prevChecked);
  };

  const handleSignUp = () => {
    // 회원가입 로직 추가
    console.log("회원가입 시도:", { email, password, name, grade, classRoom, classNumber });
  };

  const handleLogin = () => {
    // 로그인 로직 추가
    console.log("로그인 시도:", { email, password });
  };

  return (
    <>
      <div className="h-[100vh] bg-yellow-500 relative">
        <div className="w-[120px] h-[120px] p-[24px] flex justify-center items-center absolute top-[20px] left-[20px]">
          <ChevronLeft className="w-[100%] h-[100%] text-white" />
        </div>
        <div className="w-[460px] h-[681px] bg-white rounded-[10px] absolute top-[180px] left-[1200px] flex flex-col items-center">
          <div className="w-[460px] h-[120px] flex justify-center">
            <Image src={speedat} width={165} height={60} alt="speedat 로고" />
          </div>
          <div className="w-[400px] h-[64px] border-[2px] m-1 border-gray-300 rounded-[10px] flex items-center">
            <input
              className="w-full h-full pl-4 rounded-[10px] placeholder-opacity-50 text-[15px]"
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={handleNameChange}
            />
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
          <div className="w-[400px] h-[64px] m-1 flex justify-between">
            <div className="w-[130px] h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
              <input
                className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[15px]"
                type="text"
                placeholder="학년"
                value={grade}
                onChange={handleGradeChange}
              />
            </div>
            <div className="w-[130px] h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
              <input
                className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[15px]"
                type="text"
                placeholder="반"
                value={classRoom}
                onChange={handleClassRoomChange}
              />
            </div>
            <div className="w-[130px] h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
              <input
                className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[15px]"
                type="text"
                placeholder="번호"
                value={classNumber}
                onChange={handleClassNumberChange}
              />
            </div>
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
          <div className="w-[400px] h-[64px] border-[2px] m-1 border-gray-300 rounded-[10px] flex items-center relative">
            <input
              className="w-full h-full pl-4 rounded-[10px] placeholder-opacity-50 text-[15px]"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 다시 입력하세요"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button
              type="button"
              className="absolute right-[10px] top-[50%] transform -translate-y-[50%]"
              onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="w-[400px] h-[40px] m-1 flex items-center text-[13px]">
            <Checkbox checked={agreementChecked} onChange={handleAgreementChange} />
            <span className="ml-1">
              <Link href={"#"} className="underline bold font-bold">
                개인정보수집이용안내
              </Link>{" "}
              및{" "}
              <Link href={"#"} className="underline bold font-bold">
                약관
              </Link>{" "}
              에 동의합니다.
            </span>
          </div>
          <div className="w-[400px] h-[60px] bg-yellow-400 hover:bg-yellow-500 m-1 border-darkgray rounded-[10px] flex justify-center items-center">
            <button
              className="text-center font-bold text-[20px] text-white w-full h-full"
              onClick={handleSignUp}
              disabled={!agreementChecked} // 동의 체크 안 되어 있으면 회원가입 버튼 비활성화
            >
              회원가입
            </button>
          </div>
          <div>
            <label className="text-center text-[13px] font-bold">계정이 이미 있으신가요?</label>
            <label className="relative left-[10px] text-center text-[13px] underline text-yellow-400 cursor-pointer underline font-bold">
              <Link href={"/login"}>로그인</Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
