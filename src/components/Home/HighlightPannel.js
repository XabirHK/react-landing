import React, { Component } from "react";
import { Link } from "react-router-dom";


// services
import HomePageDataService from "../../services/homePage.service";
// components

export default class HighlightPannel extends Component {

    constructor(props) {
    super(props);
    this.retrieveTopPosts = this.retrieveTopPosts.bind(this);

    this.state = {
        topPosts: [],
    };
    } 

    componentDidMount() {
    this.retrieveTopPosts();
    }

    retrieveTopPosts() {
        HomePageDataService.getHighlitedPosts()
        .then(response => {
        this.setState({
            topPosts: response.data
        });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        var primaryPicture = '';
        return (
        <section className="block relative z-1 bg-gray-700">
            <div className="container mx-auto">
                <div className="justify-center flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4  -mt-24">
                    <div className="flex flex-wrap">
                        

                    {this.state.topPosts.map(
                        (topPost, i) =>    
                        <div className="w-full lg:w-4/12 px-4">
                            <h5 className="text-xl font-semibold pb-4 text-center">
                            {topPost.title}
                            </h5>
                            
                            <Link to={`/post/${topPost.id}`} >
                            <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                <img
                                alt="..."
                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                src={topPost.primaryPicture == '' ? primaryPicture = "https://images.saatchiart.com/saatchi/809265/art/7274539/6343753-CUUCWJSM-7.jpg?auto=compress&cs=tinysrgb&h=350"  : primaryPicture = topPost.primaryPicture}
                                />
                            </div>
                            </Link>
                        </div>
                    )}
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
    }
}
