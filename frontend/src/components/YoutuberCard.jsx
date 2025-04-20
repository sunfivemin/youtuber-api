import { FaPen, FaTrash } from "react-icons/fa";
import Button from "./Button";

export default function YoutuberCard({ youtuber, onEdit, onDelete }) {
  const { channelTitle, sub, videoNum } = youtuber;

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <h2 className="text-xl font-semibold">{channelTitle}</h2>
      <p className="text-gray-600">구독자: {sub}</p>
      <p className="text-gray-600">영상 수: {videoNum}</p>

      <div className="flex justify-end mt-3 gap-2">
        <Button
          label="수정"
          variant="secondary"
          icon={<FaPen />}
          onClick={onEdit}
        />
        <Button
          label="삭제"
          variant="danger"
          icon={<FaTrash />}
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
