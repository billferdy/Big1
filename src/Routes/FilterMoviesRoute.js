import NavigationBar from "../Components/NavigationBar";
import Sidebar from "../Components/Sidebar";
import DisplayFilms from "../Components/DisplayFilms";

import {Container, Row } from "react-bootstrap";
import dayjs from "dayjs";

const filters = [{name: "All", path: "/", comparator: (film) => true}, {name: "Favorite", path: "/favorite", comparator: (film) => film.favorite}, {name: "Best Rated", path: "/best-rated", comparator: (film) => film.rating === 5}, {name: "Seen Last Month", path: "/seen-last-month", comparator: (film) => (film.date > dayjs().subtract(30, "day") && film.date < dayjs())}, {name: "Unseen", path: "/unseen", comparator: (film) => film.date ? false : true}];

function FilterMoviesRoute(props){

    return (
        <div>
            <header>
                <NavigationBar />
            </header>
            <main>
                <Container fluid>
                    <Row className="vh-100">
                        <Sidebar options={filters.map((filt) => {return {name: filt.name, path: filt.path}})} filterState={props.filterState} />
                        <DisplayFilms deleteFilm={props.deleteFilm} changeRating={props.changeRating} toggleFavorite={props.toggleFavorite} filter={props.filterState} films={props.movies.filter(filters.find((filt) => filt.name === props.filterState).comparator)}/>
                    </Row>
                </Container>
            </main>
        </div>
    );
}

export default FilterMoviesRoute;