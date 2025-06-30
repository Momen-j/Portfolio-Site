import Project from "./Project";

// Make project component pass in props
// props will be icon, link, descrition, tools and whatever else

function Projects() {
  return (
    <>
      <div className="text-app-text text-5xl font-bold mb-4">Projects</div>
      <div className="flex gap-5">
        <h2>Convertaphile</h2>
        <h2>Atlus Navigator</h2>
      </div>
    </>
  );
}

export default Projects;
