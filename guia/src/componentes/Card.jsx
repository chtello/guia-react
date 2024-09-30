import React from "react";
function Card({filtro,cat}) {
return(
    <div className="cards">
        {filtro.map((i) => (
            <div key={i.id}> 
                <h3>{i.title}</h3>
                <p>{i.price}</p>
            </div>
            
        ))}
    </div>
);
}
export default Card;