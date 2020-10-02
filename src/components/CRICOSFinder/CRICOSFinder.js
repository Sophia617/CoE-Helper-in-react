import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import jsonData from "../../data/coursesWithCRICOS";
import Wrapper from "./CRICOSFinder.styles";
import Search from "./Search";
import CourseList from "./CourseList";
import PaginationComp from "../ReusableComponents/PaginationComp";

const CRICOSFinder = () => {
  // Lists of courses from json file
  const [courses, setCourses] = useState([]);
  // To save user's input query
  const [query, setQuery] = useState("");
  // List of courses matching with user query
  const [searchResult, setSearchResult] = useState([]);
  // shows CourseList component only when searching is true
  const [searching, setSearching] = useState(false);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(7);

  useEffect(() => {
    setCourses([...jsonData]);
  }, []);

  useEffect(() => {
    searchResultHandler();
  }, [query]);

  /***************************
   *  Handling UserInput
   * ************************/

  const userInputHandler = (userInput) => {
    setQuery(userInput);
    userInput === "" ? setSearching(false) : setSearching(true);
  };

  const searchResultHandler = () => {
    let filterQuery = query.toLowerCase();
    const searchResultList = courses.filter((course) => {
      if (course.name.toLowerCase().indexOf(filterQuery) > -1) {
        return course;
      }
      if (course.code.toLowerCase().indexOf(filterQuery) > -1) {
        return course;
      }
    });
    setSearchResult([...searchResultList]);
  };

  /***************************
   *  Handling Pagination
   * ************************/

  const indexOfLastItem = currentPage * coursesPerPage;
  const indexOfFirstItem = indexOfLastItem - coursesPerPage;
  const currentSearchedCourses = searchResult.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper id="cricosFinder">
      <Container>
        <h1>
          <i className="fas fa-search"></i> CRICOS Finder
        </h1>
        <br />
        <Search userInputHandler={userInputHandler} query={query} />
        {searching && (
          <>
            <CourseList searchResult={currentSearchedCourses} /> <br />
            <PaginationComp
              itemsPerPage={coursesPerPage}
              searchResult={searchResult.length}
              paginate={paginate}
            />
          </>
        )}
      </Container>
    </Wrapper>
  );
};
export default CRICOSFinder;
