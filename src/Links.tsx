import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

function Links() {
  // WILL BE AN INLINE GRID OF LINKS
  // RESUME LINK needs to attach to a certain link in gdocs that will always have my most recent resume)
  return (
    <>
      <div className="flex gap-4 text-app-text text-6xl">
        <a
          href="https://github.com/Momen-j"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/moses-joseph"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://docs.google.com/document/d/1om2ZZgwLJDejqrBKwDpAFGRpJ4iYidB3gK2cMk4uvBs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaFileAlt />
        </a>
      </div>
    </>
  );
}

export default Links;
