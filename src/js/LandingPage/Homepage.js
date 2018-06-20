import React, { Component } from "react";
import { Footer } from "./Footer/Footer";

export default class HomePage extends Component {
    componentWillMount() {
        document.title = "GlobalCrypt";
    }
    render() {
        return (
            <main>
                <FirstSection isLogin={this.props.isLogin} />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <SixthSection />
                <SeventhSection />
                <EighthSection />
                <LastSection />
                <Footer />
            </main>
        );
    }
}
