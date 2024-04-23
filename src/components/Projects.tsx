import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="mt-14 scroll-mt-24" id="projects">
      <h3 className="font-semibold text-4xl">{`My {dev} projects`}</h3>
      <p>From Websites to Web & Mobile Applications</p>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 py-12 max-w-screen-lg mx-auto">
        <ProjectItem
          tags={["React", "HTML"]}
          title="Ecommerce Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dolor in sem fringilla egestas non sed turpis. Fusce placerat suscipit eros, non molestie lorem molestie ut. Donec sagittis ipsum eu neque tempus pretium."
          projectLink="/"
          githubLink="/"
        />
        <ProjectItem
          tags={["React", "HTML"]}
          title="Ecommerce Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dolor in sem fringilla egestas non sed turpis. Fusce placerat suscipit eros, non molestie lorem molestie ut. Donec sagittis ipsum eu neque tempus pretium."
          projectLink="/"
          githubLink="/"
        />
        <ProjectItem
          tags={["React", "HTML"]}
          title="Ecommerce Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dolor in sem fringilla egestas non sed turpis. Fusce placerat suscipit eros, non molestie lorem molestie ut. Donec sagittis ipsum eu neque tempus pretium."
          projectLink="/"
          githubLink="/"
        />
      </div>
    </div>
  );
}
