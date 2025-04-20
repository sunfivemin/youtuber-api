import { getAllYoutubers, deleteYoutuber } from "../api/youtuber";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🎥 유튜버 목록</h1>
        <Link
          to="/new"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + 유튜버 등록
        </Link>
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
