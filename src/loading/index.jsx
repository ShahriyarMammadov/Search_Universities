import { Spin } from "antd";
import React from "react";

const Loading = () => {
    return (
        <div style={{ width: "100%", height: '80vh', display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <Spin />
        </div>
    );
};

export default Loading;
