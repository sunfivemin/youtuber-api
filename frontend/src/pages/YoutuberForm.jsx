import { useState } from "react";
import { createYoutuber } from "../api/youtuber";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function YoutuberForm() {
  const [form, setForm] = useState({
    channelTitle: "",
    sub: "",
    videoNum: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createYoutuber(form);
    navigate("/");
  };

  return (
    <div className="">
      <Header title="유튜버 등록" showBack />
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="channelTitle"
          placeholder="채널명"
          value={form.channelTitle}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="sub"
          placeholder="구독자"
          value={form.sub}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="videoNum"
          placeholder="영상 수"
          value={form.videoNum}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          등록
        </button>
      </form>
    </div>
  );
}

export default YoutuberForm;
