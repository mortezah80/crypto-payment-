import { BsChevronDown } from "react-icons/bs";
interface QuestionProps {
  text: string;
  Label: string;
}
const QuestionAcr: React.FC<QuestionProps> = ({ text, Label }) => {
  return (
    <div className="relative w-full p-10 py-8 bg-card rounded-2xl">
      <input
        type="checkbox"
        name="accordion"
        className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer bg-purple-300 peer "
      />
      <div className="w-full flex justify-between items-center font-medium peer-checked:text-primary peer-checked:[&>button]:rotate-180 duration-300 ">
        <h4 className="max-md:text-[12px] font-bold">{Label}</h4>
        <button className="text-grayText text-[20px] duration-300 ">
          <BsChevronDown />
        </button>
      </div>
      <div className="bg-grayLight text-text font-bold rounded-[12px] peer-checked:[&>div]:text-sm peer-checked:[&>div]:p-4 peer-checked:[&>div]:mt-4 peer-checked:[&>div]:scale-y-100 peer-checked:[&>div]:opacity-100">
        <div className="h-full text-[0] opacity-0 scale-y-0 origin-top-left duration-200 transform-gpu text-justify">
          {text}
        </div>
      </div>
    </div>
  );
};

export default QuestionAcr;
