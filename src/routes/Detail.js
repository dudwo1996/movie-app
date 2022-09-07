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
    }, [])
    return (
        <div>
            {
                loding ? <h1>Loding...</h1> :
                    <div>
                        <img src = "https://yts.mx/assets/images/movies/unicorn_town_2022/large-cover.jpg" />
                        {movie.data.movie.title}
                    </div>
            }
        </div>
    )
}

export default Detail;