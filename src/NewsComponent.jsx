import React, { useEffect, useState } from 'react';

function NewsComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=2e6f8fe0c545463d95d14926a8f76b5d`)
            .then((response) => response.json())
            .then((datajson) => {
                console.log(datajson);
                let correctdata = datajson.articles;
                setData(correctdata);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div>
                {data.map((ele, index) => {
                    return (<>
                        <h1>{ele.category}</h1>
                        <p>{ele.description}</p>
                        <img className="Images" src={ele.urlToImage} alt="My Image" />
                        <div className="price">{ele.price}</div>
                        <ul>
                            <li className="title" key={index}>
                                {ele.title}
                            </li>
                        </ul></>)
                })}
            </div>
        </>
    );
}

export default NewsComponent;



