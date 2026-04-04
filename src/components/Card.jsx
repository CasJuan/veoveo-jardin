export const Card = ({ icon, title, desc }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 bg-neutral w-[384px] h-60.25 rounded-lg shadow-2xs m-2 p-2">
                <div className="flex flex-row justify-center items-center gap-4">
                    <span className="bg-amber-200 h-11 w-11 rounded-full flex items-center justify-center">{icon}</span>
                    <h4 className="font-bold text-secondary text-2xl ">{title}</h4>
                </div>
                <p className="text-secondary text-base ">{desc}</p>
            </div>
        </>
    )
}
