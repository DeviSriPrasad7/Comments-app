// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentsDetails, addLike, deleteComment} = props
  const {
    commentName,
    comment,
    isLike,
    id,
    startingName,
    initialClassName,
  } = commentsDetails
  //
  const unLike =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const liked =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const like = isLike ? liked : unLike
  //
  const postedTime = formatDistanceToNow(new Date())
  const onLiked = () => {
    addLike(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }
  return (
    <li key={id} className="list-container">
      <div className="logo-container">
        <div className={initialClassName}>
          <p className="initial">{startingName}</p>
        </div>
        <div>
          <div className="user-details">
            <p className="user-name">{commentName}</p>
            <p>{postedTime}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="img-button-container">
        <div>
          <img src={like} alt="like" className="image" />
          <button type="button" onClick={onLiked}>
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={onDeleteComment}
          className="button-two"
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
