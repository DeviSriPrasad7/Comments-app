import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    personName: '',
    personComment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {personName, personComment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      commentName: personName,
      comment: personComment,
      isLike: false,
      startingName: personName.slice(0, 1),
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      personName: '',
      personComment: '',
    }))
  }

  addLike = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.map(eachLike => {
        if (eachLike.id === id) {
          return {
            ...eachLike,
            isLike: !eachLike.isLike,
          }
        }
        return eachLike
      }),
    })
  }

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  onAddPersonName = event => {
    this.setState({
      personName: event.target.value,
    })
  }

  onAddPersonComment = event => {
    this.setState({
      personComment: event.target.value,
    })
  }

  render() {
    const {commentsList, personName, personComment} = this.state
    console.log(commentsList)
    return (
      <div className="main-container">
        <div>
          <div className="comments-container">
            <div>
              <h1>Comments</h1>
              <p>say something about 4.0 Technologies</p>
              <div>
                <form onSubmit={this.onAddComment}>
                  <input
                    type="search"
                    onChange={this.onAddPersonName}
                    value={personName}
                    placeholder="Your Name"
                    className="input-name"
                  />
                  <br />
                  <textarea
                    type="search"
                    onChange={this.onAddPersonComment}
                    value={personComment}
                    placeholder="Your Comment"
                    className="input-des"
                  />
                  <br />
                  <button type="submit" className="button">
                    Add Comment
                  </button>
                </form>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <p>
            <span className="count">{commentsList.length} </span>Comments
          </p>
          <hr />
          <ul>
            {commentsList.map(eachUser => (
              <CommentItem
                key={eachUser.id}
                commentsDetails={eachUser}
                addLike={this.addLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
