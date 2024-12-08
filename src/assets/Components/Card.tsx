interface CardProps {
    title: string;
    description: string;
    tags: string[];
}

const Card: React.FC<CardProps> = ({ title, description, tags }) => {
    return (
        <div className=" hover:bg-slate-900 rounded-2xl">
            <div className="flex ">
                <div className="">
                <img className="hidden md:block size-25"
                 src="./images/logo1.png" 
                 alt="" />
                </div>
                <div className=" p-4  ">
                    <div className="mb-4">
                <a href={title} target="_blank" rel="noopener noreferrer" className=" text-slate-300 text-lg font-bold ">
                        {title}
                    </a>
                    </div>
                    <p className="card-text text-slate-400 text-sm mb-4 leading-relaxed font-normal">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag bg-transparent bg-slate-800 rounded-full text-slate-300 text-xs px-2 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
