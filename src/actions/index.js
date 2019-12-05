import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const request = {
      endpoint: "/streams",
      method: "post",
      body: { ...formValues, userId }
    };

    const response = await streams(request);
    console.log({ response });
    dispatch({ type: CREATE_STREAM, payload: response });
    //  Do some programmatic navigation to
    // get the user back to the root route
    history.push("/");
  };
};

export const fetchStreams = () => async dispatch => {
  const request = {
    endpoint: "/streams",
    method: "get"
  };
  const response = await streams(request);
  console.log({ response });
  dispatch({ type: FETCH_STREAMS, payload: response });
};

export const fetchStream = id => async dispatch => {
  const request = {
    endpoint: `/streams/${id}`,
    method: "get"
  };
  const response = await streams(request);
  console.log({ response });
  dispatch({ type: FETCH_STREAM, payload: response });
  // Do some programmatic navigation to
  // get the user bback to the root route
};

export const editStream = (id, formValues) => async dispatch => {
  const request = {
    endpoint: `/streams/${id}`,
    method: "PATCH",
    body: formValues
  };
  const response = await streams(request);
  console.log({ response });
  dispatch({ type: EDIT_STREAM, payload: response });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  const request = {
    endpoint: `/streams/${id}`,
    method: "delete"
  };
  const response = await streams(request);
  console.log({ response, id });
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
