export default function MovieCard({data}){
    return(
        <div className="max-w-full relative rounded overflow-hidden">
        <img src={data.posterUri} alt="Image card" />
        <div className="absolute bottom-0 px-3 pb-3">
            <h3 className="text-white font-bold text-2xl">{data.title}</h3>
            <p className="text-slate-200 text-sm font-medium">{new Date(data.releaseDate).getFullYear()}</p>
        </div>
    </div>
    )
}