import React, { Component } from "react";

// import Navbar from "components/Navbars/AuthNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


// services
import PostDataService from "../services/post.service";

export default class Post extends Component {

  constructor(props) {
    super(props);
    this.retrievePost = this.retrievePost.bind(this);
      
    var today = new Date();

    // todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  

    this.state = {
      id: this.props.match.params.id,
      currentDateTime: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      
    };
  } 

    componentDidMount() {
    this.retrievePost(this.state.id);
    }

    retrievePost(id) {
      PostDataService.getPostById(id)
      .then(response => {
      this.setState({
        title: response.data.title,
        description: response.data.description,
        category: response.data.category,
        status: response.data.status,
        tags: response.data.tags,
        language: response.data.language,
        primaryPicture: response.data.primaryPicture,
      });
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
    });
  }

  render() {
    var primaryPicture = 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80';
    this.state.primaryPicture !== '' ? primaryPicture = this.state.primaryPicture : primaryPicture = 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80'
    return (
      <>
        <IndexNavbar transparent />
        <main className="profile-page mx-auto">
          <section className="relative block h-500-px">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url("+ primaryPicture + ")",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
            </div>
          </section>


          <section className="items-center mx-auto flex mb-10">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap">
                  
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="w-full py-4">
                        <h3 className="text-4xl font-semibold text-gray-800 mb-2">

                            {this.state.title}

                        </h3>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">তারিখ : {this.state.currentDateTime}</p>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="py-2 border-t border-gray-300">
                  </div>


                  <div className="text-justify mt-4 text-lg leading-relaxed text-gray-600 pb-20">
                      
                    <div dangerouslySetInnerHTML={{
                      __html: this.state.description
                    }}></div>
                    

                  </div>
              
                </div>
              </div>
            </div>
          </section>
          <section className="relative block h-70-px">
            
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
