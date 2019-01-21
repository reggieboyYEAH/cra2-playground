import { connect } from 'react-redux'
import { AppState } from "../../redux/AppState";
import { Dispatch } from 'redux';
import { postCommentsRequest, postCommentsRequestFailure, postCommentsRequestSuccess } from './duck/actions';
import PostComments from './postcomments.component';
import { PostCommentsState } from './duck/state';

export interface IDispatchProps {
    postCommentsRequest: typeof postCommentsRequest,
}

const mapStateToProps = (state: AppState): PostCommentsState =>
    ({ ...state.comments })


const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        postCommentsRequest: (postId: number) => dispatch(postCommentsRequest(postId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostComments)