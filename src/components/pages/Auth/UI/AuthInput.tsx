import { UseFormRegisterReturn } from "react-hook-form";
import { IconType } from "react-icons";
interface AuthInputProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>> | IconType;
  placeHolder: string;
  label: string;
  labelStyle?: React.CSSProperties;
  gray?: boolean;
  hookFormProps?: UseFormRegisterReturn<string>;
}

const AuthInput: React.FC<AuthInputProps> = ({
  Icon,
  placeHolder,
  label,
  labelStyle,
  gray,
  hookFormProps,
}) => {
  return (
    <div className="w-full">
      <span
        className={`pl-2 text-[14px] font-bold
         ${gray ? "text-grayText" : "text-text"}`}
        style={labelStyle}
      >
        {label}
      </span>
      <div className="bg-grayLight rounded-xl flex items-center justify-between">
        <input
          type="text"
          className="text-xs w-full bg-transparent focus:outline-none focus:border-none h-9 rounded-xl pl-3"
          placeholder={placeHolder}
          {...hookFormProps}
        />
        {Icon && (
          <div className="pr-3">
            <Icon />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
