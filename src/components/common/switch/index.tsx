interface SwitchProps {
  first: string | boolean;
  seconde: string | boolean;
  setActive: (active: any) => void;
  active: string | boolean;
  wrapperBgColor?: string;
}

const Switch: React.FC<SwitchProps> = ({
  first,
  seconde,
  setActive,
  active,
  wrapperBgColor,
}) => {
  return (
    <div
      className={`flex rounded-xl p-1 gap-1 text-xs font-extrabold w-full max-w-[165px] ${
        wrapperBgColor ? wrapperBgColor : "bg-grayLight"
      }`}
    >
      <div
        onClick={() => setActive(first)}
        className={`px-4 text-center p-1 cursor-pointer rounded-xl duration-300 ${
          active == first ? "text-white bg-primary" : "text-grayText"
        } `}
      >
        {first}
      </div>
      <div
        onClick={() => setActive(seconde)}
        className={`px-4 text-center p-1 cursor-pointer rounded-xl duration-300 ${
          active == seconde ? "text-white bg-primary" : "text-grayText"
        } `}
      >
        {seconde}
      </div>
    </div>
  );
};

export default Switch;
