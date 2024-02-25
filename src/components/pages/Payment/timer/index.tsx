"use client";
interface TimerProps {
  initialTime: string;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  return (
    <div className="border-primary border-2 rounded-[16px] px-[10px] font-bold py-[4px] text-primary text-[22px]">
      00:59:45
    </div>
  );
};

export default Timer;
