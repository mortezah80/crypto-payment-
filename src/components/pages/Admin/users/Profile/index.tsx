import { AiOutlineUser } from "react-icons/ai";

interface ProfileInfoProps {
  userName: string;
  email: string;
}
const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  return (
    <div className="font-bold flex space-x-2 items-center">
      <div className="bg-card_light w-9 h-9 rounded-xl text-primary text-xl border-white border-2 outline-primary outline flex items-center text-center justify-center">
        <AiOutlineUser />
      </div>
      <div className="flex text-left flex-col">
        <h3 className="text-text">{props.userName}</h3>
        <span className="font-thin text-grayText text-xs">
          {props.email}
        </span>
      </div>
    </div>
  );
};

export default ProfileInfo;
