import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'

function Links() {
  // WILL BE AN INLINE GRID OF LINKS
  // RESUME LINK needs to attach to a certain link in gdocs that will always have my most recent resume)
  return (
    <>
      <div className="flex gap-4 text-app-text text-6xl mb-10">
        <FaGithub />
        <FaLinkedin />
        <FaFileAlt />
      </div>
    </>
  );
}

export default Links;
