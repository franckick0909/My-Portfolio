import "./Like.scss";
import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";

const Like = () => {

    const [like, setLike] = useState(10);
    const [dislike, setDislike] = useState(0);

    const handleLike = () => {
        setLike(like ? like + 1 : 1);
    };

    const handleDislike = () => {
        setDislike(dislike ? dislike + 1 : -1);
    };




    return (
        <div className="container-like">
            <button>
                <span>{like}</span>
                <FaRegThumbsUp onClick={handleLike} />
            </button>
            <button>
                <span>{dislike}</span>
                <FaRegThumbsUp onClick={handleDislike} />
            </button>
        </div>
    );
};

export default Like;