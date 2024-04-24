import { PROJECTS } from "../constants/projects";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="mt-14 scroll-mt-24" id="projects">
      <h3 className="font-semibold text-4xl">{`My {dev} projects`}</h3>
      <p>From Websites to Web & Mobile Applications</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 py-12 max-w-screen-lg mx-auto">
        {PROJECTS.map((project) => (
          <ProjectItem
            tags={project.tags}
            title={project.title}
            description={project.description}
            image={project.image}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}
