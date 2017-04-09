//Comment.js
import React, { Component } from 'react';
import style from '../style';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toBeUpdated: false,
      author: '',
      text: ''
    };
    //binding all our functions to this class
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }

  updateComment(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }

  handleCommentUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //if author or text changed, set it. if not, leave null and our PUT request
    //will ignore it.
    let author = (this.state.author) ? this.state.author : null;
    let text = (this.state.text) ? this.state.text : null;
    let comment = { author: author, text: text};
    this.props.onCommentUpdate(id, comment);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      author: '',
      text: ''
    })
  }

  deleteComment(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onCommentDelete(id);
    console.log('oops deleted');
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  render() {
    return (

        <li className="mdl-list__item mdl-list__item--three-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>{this.props.author}</span>
            <span className="mdl-list__item-text-body">
              {this.props.text}
            </span>
          </span>
          <span className="mdl-list__item-secondary-content">
            <a style={ style.updateLink } href='#' onClick={ this.updateComment }>update</a>
            <a style={ style.deleteLink } href='#' onClick={ this.deleteComment }>delete</a>
          </span>
          { (this.state.toBeUpdated)
            ? (<form onSubmit={ this.handleCommentUpdate }>
                <input
                  type='text'
                  placeholder='Update name...'
                  style={ style.commentFormAuthor }
                  value={ this.state.author }
                  onChange={ this.handleAuthorChange } />
                <input
                  type='text'
                  placeholder='Update your comment...'
                  style={ style.commentFormText }
                  value={ this.state.text }
                  onChange={ this.handleTextChange } />
                <input
                  type='submit'
                  style={ style.commentFormPost }
                  value='Update' />
              </form>)
            : null}
          </li>
      
    )
  }
}

export default Comment;
