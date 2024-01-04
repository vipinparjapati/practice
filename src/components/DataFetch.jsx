import React, { useEffect, useState } from "react";

const DataFetch = () => {
    const [images, SetImages] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/50")
            .then((response) => response.json())
            .then((data) => SetImages(data.message));
    }, []);
    return (
        <div>
            <div>
                {images &&
                    images.map((man) => (
                        <img width={"200px"} height={"200px"} src={man}></img>
                    ))}
            </div>
        </div>
    )
}

export default DataFetch
