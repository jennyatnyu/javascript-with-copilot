import React from "react";

//generate a component that takes an image url
//and return a circular image
export const CircularImage = ({ imageUrl, name }: { imageUrl: string, name: string }) => {
    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <img
                src={require(`../images/${imageUrl}`)}
                alt={name}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                }}
            />
        </div>
    );
};
