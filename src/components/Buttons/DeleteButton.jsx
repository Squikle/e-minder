import PropTypes from "prop-types";
import BaseButton from "./BaseButton";
import { TrashIcon } from "../Icons/TrashIcon";

function DeleteButton({ size, onClick, style, ...props }) {
  return (
    <BaseButton
      size={size}
      onClick={onClick}
      Icon={TrashIcon}
      style={style}
      {...props}
    ></BaseButton>
  );
}

DeleteButton.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default DeleteButton;
