export default function ProjectCard({ props }: {props: project}) {
    return (
        <>
            <div className="mx-4 bg-gray-800 px-4 rounded relative">
                <h4 className="fs--lg font-bold text-center my-2">{props.name}</h4>
                <p className="mb-10 leading-[1.5]">&rArr; {props.description}</p>
                <div className="fs--sm text-center absolute bottom-4">{props.technology}</div>
            </div>
        </>
    );
}