import ProjectCard from "./ProjectCard"

export default function Works() {
    const projects: project[] = [
        {name: "Railguard", description: "A realtime performance and errors monitor for applications", technology: "JavaScript, TypeScript, Express.js"},
        {name: "Kanon Academy", description: "An Online Learning Platform for Bangladesh", technology: "JavaScript, TypeScript, Express.js, CSS"},
        {name: "Adorn", description: "An Ornaments e-commerce Shop", technology: "JavaScript, CSS, Ruby"}
    ]
    return (
        <>
            <div id="works" className="w-4/5 mx-auto my-4">
                <h2 className="font-bold fs--xl my-4">Our Projects</h2>
                <div className="grid grid-cols-3 mb:grid-cols-1 tb:gap-2">
                    {projects.map((value, index) => <ProjectCard key={index} props={value} />)}
                </div>
            </div>
        </>
    );
}