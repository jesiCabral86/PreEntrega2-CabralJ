import { FaCartArrowDown } from "react-icons/fa";

export const CartWidget = () => {
    return (
      <div className="d-flex">
      <FaCartArrowDown color={'red'} size={25} />
      <p className="mx-2">1</p>
      </div>
    )
  }