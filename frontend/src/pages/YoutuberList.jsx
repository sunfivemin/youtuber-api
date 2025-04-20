import { getAllYoutubers, deleteYoutuber } from "../api/youtuber";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FaPlus } from "react-icons/fa";
import Button from "../components/Button";

export default function YoutuberList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllYoutubers().then((res) => setList(res.data));
  }, []);

  const handleDelete = async (id) => {
    const shouldDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!shouldDelete) return;

    try {
      await deleteYoutuber(id);
      setList((prev) => prev.filter((yt) => yt.id !== id));
    } catch (err) {
      console.error("삭제 실패", err);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <Header
          title="🎥 유튜버 목록"
          rightElement={
            <Link to="/new">
              <Button label=" 등록" icon={<FaPlus />} />
            </Link>
          }
        />
      </div>

      <div className="space-y-4">
        {list.length === 0 ? (
          <p>등록된 유튜버가 없습니다.</p>
        ) : (
          list.map((yt) => (
            <div
              key={yt.id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold">{yt.channelTitle}</h2>
              <p className="text-gray-600">구독자: {yt.sub}</p>
              <p className="text-gray-600">영상 수: {yt.videoNum}</p>
              <div className="mt-2 space-x-4">
                <Link
                  to={`/youtubers/${yt.id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  ✏ 수정
                </Link>
                <button
                  onClick={() => handleDelete(yt.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  🗑 삭제
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
