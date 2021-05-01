import React, { Component } from "react";

// import Navbar from "components/Navbars/AuthNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// services
import PostDataService from "../services/post.service";
import TopMenuDataService from "../services/topMenu.service";


export default class List extends Component {
  constructor(props) {
    super(props);
    this.retrieveCategory = this.retrieveCategory.bind(this);
    this.retrievePostsByCategory = this.retrievePostsByCategory.bind(this);
      
    var today = new Date();
    this.state = {
      id: this.props.match.params.id,
      currentDateTime: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      postsByCategory: [],
      
    };
  }

  componentDidMount() {
    this.retrievePostsByCategory(this.state.id);
    this.retrieveCategory(this.state.id);
  }

  retrievePostsByCategory(id) {
    PostDataService.getPostsByCategoryId(id)
    .then(response => {
    this.setState({
      postsByCategory: response.data
    });
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
  }

  retrieveCategory(id) {
    TopMenuDataService.getCategoryByid(id)
      .then(response => {
      this.setState({
        categoryTitle: response.data.title,
      });
          console.log(response.data);
      })
      .catch(e => {
          console.log(e);
    });
  }


  render() {
    var primaryPicture = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
    return (
      <>
        <IndexNavbar transparent />
        <main className="profile-page mx-auto">
          <section className="relative block h-350-px bg-gray-200">
            
          </section>
          <section className="relative py-16 bg-gray-300">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap">
                    
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="w-full py-4">
                        <h3 className="float-left text-4xl font-semibold text-gray-800 mb-2">
                        {this.state.categoryTitle}

                        </h3>
                        {/* <div className="float-right p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            22
                          </span>
                          <span className="text-sm text-gray-500">পোস্ট</span>
                        </div> */}
                        {/* <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            10
                          </span>
                          <span className="text-sm text-gray-500">Photos</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            89
                          </span>
                          <span className="text-sm text-gray-500">Comments</span>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {this.state.postsByCategory.map(
                        (post, i) => 

                  
                  
                  
                  <section>
                    <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    
                    </div>

                    <div class="bg-gray-200 -mt-24 relative p-8 mb-8 rounded-lg">
                    <h4 className="text-xl font-bold text-grey mb-4">
                      {post.title}
                    </h4>

                    
                  
                    <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-600">
                    <div className="pr-4 float-left ml-auto mr-auto ">
                      <img
                        alt="..."
                        src={post.primaryPicture !== '' ? primaryPicture = post.primaryPicture : primaryPicture}
                        className="shadow-lg rounded-lg mx-auto max-w-250-px"
                      />
                    </div>

                    {/* {miniDescription = post.description.replace(/<[^>]+>/g, '')} */}
                    
                    {`${ post.description.replace(/<[^>]+>/g, '').substring(0, 320)}...`}
                      

                    </p>
                      <a
                        href={`/post/${post.id}`}
                        className="text-lg font-normal text-blue-500"
                        
                      >
                        বিস্তারিত 
                      </a>
                  </div>

                  </section>
                 
                  

                  
                  
                  )}
          
                 
                </div>
              </div>
            </div>
          </section>

             



        </main>
        <Footer />
      </>
    );
  }
}
