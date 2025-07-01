import { FaMapMarkerAlt } from "react-icons/fa";
//import { MdMail } from "react-icons/md";

function CTA() {
  return (
    <>
      <div className="text-app-text text-5xl font-bold mb-4">
        Want to get in touch?
      </div>
      <div className="text-app-text text-xl">
        <div className="pb-2">
          Email me at <u>mosesejoseph@gmail.com</u>
        </div>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt />
          Boston, Massachusetts
        </div>
      </div>
    </>
  );
}

export default CTA;
