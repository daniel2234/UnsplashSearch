import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div className = "max-w-sm rounded overflow-hidden shadow-lg" key = {image.id}>
        <img alt = {image.description} src = {image.urls.regular}/>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by @{image.user.social.instagram_username}
          </div>
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {300}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
          <li>
            <strong>Description:</strong> {image.alt_description}
          </li>
        </ul>
      </div>
    )
  })
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-6">
        {images}
      </div>
    </div>
  )
}

export default ImageList;