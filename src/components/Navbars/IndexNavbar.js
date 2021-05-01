/*eslint-disable*/
import React, { Component } from "react";
import { Link } from "react-router-dom";

// services
import TopMenuDataService from "../../services/topMenu.service";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.retrieveMenuItems = this.retrieveMenuItems.bind(this);
    
    this.state = {
        menuItems: [],
    };

    // this.toggle = this.toggle.bind(this);
    // this.loading = true;
  } 


  componentDidMount() {
    this.retrieveMenuItems();
    //this.loading = false;
  }


  retrieveMenuItems() {
    TopMenuDataService.getTopMenu()
    .then(response => {
    this.setState({
      menuItems: response.data
    });
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
  }

  render() {
    return (
      <>
        <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/"
                className="text-gray-800 text-lm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              >
                <b>নিশ্চিন্তপুর</b> 
              </Link>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none block" 
              }
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
  
                {this.state.menuItems.map(
                  (menuItem, i) =>
                  <li key = {menuItem.categoryId} className="flex items-center">
                    <a
                      className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href={`/list/${menuItem.categoryId}`}
                    >
                      <i className="text-gray-500 far text-lg leading-lg mr-2" />{" "}
                      {menuItem.title}
                    </a>
                  </li>
                )}
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {/* <li className="flex items-center">
                  <IndexDropdown />
                </li> */}
                <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#"
                    target="_blank"
                  >
                    <i className="text-gray-500 fab fa-facebook text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Share</span>
                  </a>
                </li>
  
                <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#"
                    target="_blank"
                  >
                    <i className="text-gray-500 fab fa-twitter text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                  </a>
                </li>
  
                {/* <li className="flex items-center">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                    target="_blank"
                  >
                    <i className="text-gray-500 fab fa-github text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Star</span>
                  </a>
                </li> */}
  
                {/* <li className="flex items-center">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-arrow-alt-circle-down"></i> Download
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );

  }
  
}
