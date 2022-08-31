import React from "react";
import axios from "axios";

import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {

  state = { images: []}

  onSubmitHandler = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { 
        query: term 
      },
    })
    this.setState({ images: response.data.results })
    console.log(response.data.results)
  }


  render() {
    return (
      <div className="App">
        <h1 className="text-2xl font-bold text-center mt-2">
          Pics from UnSplash
        </h1>
        <h2 className="text-lg font-bold text-center"> Search Bar goes here.</h2>
        <div className=" container mx-auto p-4 border-4 rounded-md">
          <SearchBar onSubmit={this.onSubmitHandler} />
        </div>
        <h3>Search Results: {this.state.images.length > 0 ? this.state.images.length : 0} images</h3>
        <ImageList images = {this.state.images}/>
      </div>
    )
  }
}



export default App;
