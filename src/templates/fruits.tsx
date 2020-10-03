import React from "react";

export default function Fruit({ pageContext }) {

    console.log(pageContext);

    return (
        <div>
            <div>Hello {pageContext.name}</div>
            <h1>Description</h1>
            <div>{pageContext.desc}</div>
        </div>
    )
}