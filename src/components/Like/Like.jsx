import "./Like.scss";
import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";

const Like = () => {

    const [like, setLike] = useState(10);
    const [count, setCount] = useState(0);

    const handleLike = () => {
        setLike(like + 1);
    };


    return (
        <div className="container-like">
            <button>
                <span>{like}</span>
                <FaRegThumbsUp onClick={handleLike} />
            </button>
            <button>
                <span>{count}</span>
                <FaRegThumbsUp />
            </button>
        </div>
    );
};

export default Like;