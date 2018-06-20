import React from "react";
import { Component } from "react";
import "./BackgroundKey.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
import variables from "!!sass-variable-loader!./../LandingPage/mixinAndMediaQ/_variableColor.scss";

export class BackgroundKey extends Component {
    render() {
        return (
            <span className="triAnglePage">
                {variables.backGroundMechTriangleAmbient}
            </span>
        );
    }
}
