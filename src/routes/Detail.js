import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail() {
    const { id } = useParams();
    const [loding, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json);
        console.log(json.data);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {
                loding ? <h1>Loding...</h1> :
                    <div>
                        <img src={movie.data.movie.large_cover_image} alt={movie.data.movie.large_cover_image} />
                        <div>
                            {movie.data.movie.title}
                        </div>
                    </div>
            }
        </div>
    )
}

export default Detail;