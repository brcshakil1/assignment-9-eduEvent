import { PropTypes } from "prop-types";

const Member = ({ member }) => {
  const { name, img, position } = member;
  return (
    <div className="p-3">
      <img className="py-2" src={img} alt={position} />
      <h3 className="p-1 text-2xl font-bold text-white">{name}</h3>
      <p className="px-1 text-white">{position}</p>
    </div>
  );
};

Member.propTypes = {
  member: PropTypes.object,
};

export default Member;
