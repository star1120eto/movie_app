import axios from "axios";

export default async function handler(req, res){
    try {
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&lamguage=ja-JP`);
        res.status(200).json(response.data);
        console.log('取得した結果：',response.data);
    } catch (error) {``
        console.log(error);
    }
}