export interface BlogCardProps {
  title: string;
  href: string;
  category: string;
  img?: string;
}

export default function BlogCard({ title, category, img, href }: BlogCardProps) {
  return (
    <a
      className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
      href={href}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full object-cover rounded-t-xl" src={img} alt={`Blog Image: ${title}`} />
      </div>
      <div className="p-4 md:p-5">
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">{category}</p>
        <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
          {title}
        </h3>
      </div>
    </a>
  );
}
