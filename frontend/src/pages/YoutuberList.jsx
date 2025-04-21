import { getAllYoutubers, deleteYoutuber } from "../api/youtuber";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";
import Button from "../components/Button";
import YoutuberCard from "../components/YoutuberCard";
import Loader from "../components/Loader";

export default function YoutuberList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllYoutubers().then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;

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
    <main>
      <div className="flex justify-between items-center">
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
            <YoutuberCard
              key={yt.id}
              youtuber={yt}
              onEdit={() => navigate(`/youtubers/${yt.id}`)}
              onDelete={() => handleDelete(yt.id)}
            />
          ))
        )}
      </div>
    </main>
  );
}
