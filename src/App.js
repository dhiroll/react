import React from "react";
import Logo from "./components/common/Logo";
import SearchBar from "./components/common/SearchBar";
import NavBar from "./components/common/NavBar";
import Button from "./components/movie/Button";
import Title from "./components/movie/Title";
import MainInfos from "./components/movie/MainInfos";
import Details from "./components/movie/Details";
import Synopsis from "./components/movie/Synopsis";
import Ratings from "./components/movie/Ratings";
import "./App.css";
import data from "./data/Data.json";



class App extends React.Component {
    render() {

        return (
            <div className="page">
                <div className="container menu">
                    <header>
                        <div className="row">
                            <div className="col">
                                <Logo />
                            </div>
                            <div className="col">
                                <SearchBar />
                            </div>
                        </div>
                        <NavBar />
                    </header>
                </div>
                <div className="container">
                    <div className="pageContent">
                        <Title title={data.title} />
                        <div className="row">
                            <div className="col-3">
                                <img src={"images/" + data.poster} />
                            </div>
                            <div className="col-9">
                                <MainInfos />
                                <Ratings />
                                <Button />
                            </div>
                        </div>
                        <Synopsis />
                        <Details />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;