import React from "react"

class SearchBar extends React.Component {

  state = { term : ''}

  inputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)

    console.log(this.state.term, 'this gets called here.');
  }

  render() {
    return (
      <div className="flex justify-center">
        <div className="mb-3 md:w-1/2">
          <label className="form-label font-bold inline-block mb-2 text-gray-700">Image Search</label>
          <form onSubmit={this.onFormSubmit}>
            <input
              type="search"
              className="
                form-control
                block
                w-full
                px-4
                py-3
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              value={this.state.term}
              placeholder="Search image"
              onChange={this.inputChange}
            />
          </form>
      </div>
    </div>
    )
  }
}

export default SearchBar;