// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <>
      <li className="blog-item-card">
        <div className="title-and-publishedDate">
          <h1 className="title">{title}</h1>
          <p className="publishedDate">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
    </>
  )
}

export default BlogItem
