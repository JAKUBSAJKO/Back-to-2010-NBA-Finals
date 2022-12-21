import { useEffect, useState } from "react";
import { GiOldMicrophone } from "react-icons/gi";
import { useParams } from "react-router-dom";
import GameBoard from "../components/GameBoard/GameBoard";

import { ScoreBoard } from "../components/ScoreBoard/ScoreBoard";
import { UserPoints } from "../components/UserPoints/UserPoints";

export interface IQuestion {
  id: number;
  title: string;
  commentator: string;
  foto: string;
  question: {
    text: string;
    answers: string[];
    correctAnswer: string;
    goodAnswer: string;
    badComment: string;
  };
}

export const Question = () => {
  const [question, setQuestion] = useState<IQuestion>();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/easy/${id}`);
      const data = await res.json();
      setQuestion(data);
    };

    fetchData();
  }, []);

  console.log(question);

  return (
    <div className="w-full h-screen flex flex-col">
      <ScoreBoard />
      <GameBoard question={question} />
      <div className="w-full h-24 bg-orange-300 flex justify-center items-center gap-4">
        <div className="border-2 border-black rounded-lg px-16 py-6 flex items-center">
          <GiOldMicrophone className="text-2xl mr-2" />
          <p>{question?.commentator}</p>
        </div>
        <UserPoints />
      </div>
    </div>
  );
};