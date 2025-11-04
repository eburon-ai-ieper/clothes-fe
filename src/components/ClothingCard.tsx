import { Link } from "react-router-dom";
//temporarily always redirects to the first clothing
const ClothingCard = () => {
  return (
    <Link
      className="flex-none flex flex-col items-center gap-2 cursor-pointer duration-150 hover:scale-105"
      to={`clothing/1`}
    >
      <img
        className="w-[250px] rounded-3xl bg-[#d9d9d9]"
        src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_850,h_1530,f_auto,q_auto,fl_progressive/products/suits/default/Winter/P6912_1.jpg"
        alt="suit"
      />
      <h4 className="text-md text-gray-600">Classic costume</h4>
      <h3 className="text-lg font-bold">200€</h3>
    </Link>
  );
};

export default ClothingCard;
