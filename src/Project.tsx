function Project({ image, title, description, projectLink, tools }) {
  return (
    <div className="bg-project-bg text-app-text rounded-lg shadow-black shadow-md p-4 w-full flex flex-col">
      {/* Image and Title Section */}
      <div className="flex items-start gap-4 mb-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <a
            href={projectLink}
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt={title}
              className="w-16 h-16 rounded-lg object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Title and Description */}
        <div className="flex-1">
          {/* Title */}
          <div className="mb-2">
            <a
              href={projectLink}
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-semibold hover:text-blue-600 transition-colors">
                {title}
              </h3>
            </a>
          </div>

          {/* Description */}
          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>

      {/* Tools Section */}
      {tools && tools.length > 0 && (
        <div className="flex gap-3 items-center text-4xl mt-auto">
          {tools.map((IconComponent, index) => (
            <div key={index} className=" hover:opacity-80 transition-opacity">
              {IconComponent}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Project;
