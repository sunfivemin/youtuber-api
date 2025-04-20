import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getYoutuber, updateYoutuber } from "../api/youtuber";

export default function YoutuberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    channelTitle: "",
    sub: "",
    videoNum: "",
  });
  useEffect(() => {
    getYoutuber(id).then((res) => {
      console.log("응답 확인", res.data);
      setForm(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateYoutuber(id, form);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">유튜버 정보 수정</h1>
      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          name="channelTitle"
          value={form.channelTitle || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sub"
          value={form.sub || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          name="videoNum"
          value={form.videoNum || ""}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          수정하기
        </button>
      </form>
    </div>
  );
}
