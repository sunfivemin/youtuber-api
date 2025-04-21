import { getYoutuber, updateYoutuber } from "../api/youtuber";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

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
    <main>
      <Header title="유튜버 수정" showBack={true} />
      <form onSubmit={handleUpdate} className="space-y-3">
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
          type="number"
          value={form.videoNum}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <Button type="submit" label="수정" variant="primary" />
        </div>
      </form>
    </main>
  );
}
