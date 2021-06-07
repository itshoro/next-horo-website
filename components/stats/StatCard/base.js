import PropTypes from "prop-types";

const StatCard = ({ title, children }) => (
  <div className="border border-accent rounded-lg text-white py-2 px-4 text-sm">
    <div className="capitalize pb-2">{title}</div>
    {children}
  </div>
);

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default StatCard;
