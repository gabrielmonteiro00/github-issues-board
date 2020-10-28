import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as BoardActions from '../store/modules/board/actions';
import { ApplicationState } from '../store';
import Board from '../components/board';

function mapStateToProps(state: ApplicationState) {
  return {
    board: state.board,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BoardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
