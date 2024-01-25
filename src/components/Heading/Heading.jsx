import "./Heading.scss";
import PropTypes from "prop-types";

const Heading = ({ text }) => {


  return (
    <div
      className="heading">
      {text}
    </div>
  );
};
Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
