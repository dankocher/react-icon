import React from "react";
import Icon from "../Icon";
export default ({icon, color, size = 54, onClick, className, style, name, hoverColor}) => {
    return <div>
        <Icon name={name} size={size} color={color} hoverColor={hoverColor}/>
    </div>;
}