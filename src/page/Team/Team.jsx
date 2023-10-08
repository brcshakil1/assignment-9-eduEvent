import { useEffect, useState } from "react";
import Member from "../../components/Member/Member";

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members);

  return (
    <div className="bg-gradient-to-b from-[#0095bd] to-[#53a7be] py-10">
      <h2 className="text-center text-2xl uppercase  md:text-4xl font-bold border-black text-black w-[280px] md:w-[380px] mx-auto border-l-4 border-r-4 md:mb-10 mb-6">
        Our People
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
