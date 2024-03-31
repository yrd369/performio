import React from "react";
import { BiLike } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { FaMoneyCheckAlt } from "react-icons/fa";

export default function StaticsGrid() {
  return (
    <>
      <div className="flex gap-4  items-center">
        <BoxWrapper>
          <div className="bg-red-800 rounded-full flex items-center justify-center text-white h-12 w-12 mb-3">
            <FaMoneyCheckAlt />
          </div>
          <span className="text-sm font-normal">Total Responses</span>
          <div className="flex justify-between items-center">
            <strong className="font-bold text-lg">$2,1291,420</strong>
            <span className="text-green-400 bg-green-50 px-1 py-1 text-xs">
              +132
            </span>
          </div>
        </BoxWrapper>

        <BoxWrapper>
          <div className="bg-yellow-200 rounded-full flex items-center justify-center text-white h-12 w-12 mb-3">
            <GrTransaction />
          </div>
          <span className="text-sm font-normal">Total Transactions</span>
          <div className="flex justify-between items-center">
            <strong className="font-bold text-lg">1520</strong>
            <span className="text-green-400 bg-green-50 px-1 py-1 text-xs">
              + 5.4%
            </span>
          </div>
        </BoxWrapper>

        <BoxWrapper>
          <div className="bg-red-300 rounded-full flex items-center justify-center text-white h-12 w-12 mb-3">
            <BiLike />
          </div>
          <span className="text-sm font-normal">Total Likes</span>
          <div className="flex justify-between items-center">
            <strong className="font-bold text-lg">9721</strong>
            <span className="text-green-400 bg-green-50 px-1 py-1 text-xs">
              + 4.3%
            </span>
          </div>
        </BoxWrapper>

        <BoxWrapper>
          <div className="bg-violet-200 rounded-full flex items-center justify-center text-white h-12 w-12 mb-3">
            <IoMdPeople />
          </div>
          <span className="text-sm font-normal">Total Likers</span>
          <div className="flex justify-between items-center">
            <strong className="font-bold text-lg">9721</strong>
            <span className="text-green-400 bg-green-50 px-1 py-1 text-xs">
              + 4.3%
            </span>
          </div>
        </BoxWrapper>
      </div>
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="flex bg-white p-4 rounded-lg  flex-col w-64">
      {children}
    </div>
  );
}
