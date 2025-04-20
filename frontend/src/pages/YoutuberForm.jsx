import { useState } from "react";
import { createYoutuber } from "../api/youtuber";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

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
        <Input
          name="channelTitle"
          placeholder="채널명"
          value={form.channelTitle}
          onChange={handleChange}
        />
        <Input
          name="sub"
          placeholder="구독자"
          value={form.sub}
          onChange={handleChange}
        />
        <Input
          name="videoNum"
          placeholder="영상 수"
          value={form.videoNum}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <Button type="submit" label="등록" variant="primary" />
        </div>
      </form>
    </div>
  );
}

export default YoutuberForm;
