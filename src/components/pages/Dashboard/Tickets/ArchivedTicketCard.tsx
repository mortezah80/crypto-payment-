import { FC } from "react";

interface ArchivedTicketCardProps {
  title: string;
  messages: any;
  status: string;
  createdAt: string;
  unread: boolean;
  isSelected: boolean;
}

const ArchivedTicketCard: FC<ArchivedTicketCardProps> = ({
  title,
  messages,
  status,
  createdAt,
  unread,
  isSelected,
}) => {
  return (
    <div
      className={`h-[100px] flex flex-col p-4 justify-between cursor-pointer ${
        isSelected ? "bg-primary text-white rounded-xl" : " "
      }`}
    >
      <div className="flex justify-between items-center">
        <h4
          className={`text-sm font-bold ${
            isSelected
              ? "text-white"
              : unread
              ? "text-primary"
              : "text-grayText"
          }`}
        >
          {title}
        </h4>
        {unread ? <div className="w-2 h-2 rounded-full bg-primary"></div> : ""}
      </div>
      <p
        className={`whitespace-nowrap overflow-hidden text-ellipsis text-xs ${
          isSelected
            ? "text-white"
            : unread
            ? "text-text font-bold"
            : "text-grayText font-normal"
        }`}
      >
        {messages?.length && messages[0]?.text}
      </p>
      <div className="flex justify-between items-center">
        <div className="text-grayText text-xs">{createdAt}</div>
        <div
          className={`w-[90px] h-6 flex justify-center items-center rounded-[12px] text-xs font-bold ${
            unread || status ? "bg-gold text-text" : "bg-grayText text-white"
          }`}
        >
          {unread || status ? "Open" : "Closed"}
        </div>
      </div>
    </div>
  );
};

export default ArchivedTicketCard;
