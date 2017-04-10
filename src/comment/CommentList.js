//CommentList.js
import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map((comment, index) => {
      return (
        <Comment
          key={ index }
          author={ comment.author }
          text={ comment.text }
          uniqueID={ comment['_id'] }
          onCommentDelete={ this.props.onCommentDelete }
          onCommentUpdate={ this.props.onCommentUpdate }>
          { comment.text }
        </Comment>
      )
    })
    return (
      <div>
        { commentNodes }
      </div>
    )
  }
}
export default CommentList;
