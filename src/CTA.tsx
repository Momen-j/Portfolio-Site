import { FaMapMarkerAlt } from "react-icons/fa";

function CTA() {
  return (
    <>
      <div className="text-app-text text-5xl font-bold mb-2">
        Want to get in touch?
      </div>
      <div className="text-app-text">
        <a href="mosesejoseph@gmail.com" className="mb-1">
          mosesejoseph@gmail.com
        </a>
        <div className="flex">
          <FaMapMarkerAlt />
          Boston, Massachusetts
        </div>
      </div>
    </>
  );
}

export default CTA;
