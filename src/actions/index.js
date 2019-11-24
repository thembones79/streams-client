import streams from "../apis/streams";
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
  return async dispatch => {
    const request = {
      endpoint: "/streams",
      method: "post",
      body: formValues
    };

    const response = await streams(request);
    console.log({ response });
    dispatch({ type: CREATE_STREAM, payload: response });
  };
};

export const fetchStreams = () => async dispatch => {
  const request = {
    endpoint: "/streams",
    method: "get",
    body: {}
  };
  const response = await streams(request);
  console.log({ response });
  dispatch({ type: FETCH_STREAMS, payload: response });
};

export const fetchStream = id => async dispatch => {
  const request = {
    endpoint: `/streams/:${id}`,
    method: "get",
    body: {}
  };
  const response = await streams(request);
  console.log({ response });
  dispatch({ type: FETCH_STREAM, payload: response });
};

export const editStream = (id, formValues) => async dispatch => {
  const request = {
    endpoint: `/streams/${id}`,
    method: "put",
    body: formValues
  };
  const response = await streams(request);
  console.log({ response });
  dispatch({ type: EDIT_STREAM, payload: response });
};

export const deleteStream = id => async dispatch => {
  const request = {
    endpoint: `/streams/${id}`,
    method: "delete",
    body: {}
  };
  const response = await streams(request);
  console.log({ response, id });
  dispatch({ type: DELETE_STREAM, payload: id });
};
