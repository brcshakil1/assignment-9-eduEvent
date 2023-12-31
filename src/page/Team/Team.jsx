import { useEffect, useState } from "react";
import Member from "../../components/Member/Member";

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#1861c5] to-[#022f6e] py-10 px-4">
      <h2 className="text-center text-2xl uppercase  md:text-4xl font-bold border-[#333] text-[#333] w-[280px] md:w-[380px] mx-auto border-l-4 border-r-4 md:mb-10 mb-6">
        Meet Our Team
      </h2>
      <p className="text-white text-center pb-3 md:pb-6 md:max-w-[600px] w-full mx-auto">
        Behind every successful event is a dedicated and knowledgeable team.
        Meet the experts who bring our vision to life:
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {members.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
