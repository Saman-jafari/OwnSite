import React from "react";
import { Component } from "react";
import "./BackgroundKey.css";
// eslint-disable-next-line import/no-webpack-loader-syntax

export class BackgroundKey extends Component {
    render() {
        return (
            <span className="triAnglePage">
                {variables.backGroundMechTriangleAmbient}
            </span>
        );
    }
}
