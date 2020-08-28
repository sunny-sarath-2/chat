"use strict";

const credentials = {
  credentials: "same-origin",
};

async function checkStatus(response) {
  let dataResponce;
  if (response.status >= 200 && response.status < 300) {
    dataResponce = await response;
  } else {
    let error = new Error(response.statusText);
    error.response = await response.json();

    dataResponce = Promise.reject(error);
  }
  return dataResponce;
}

function getJwtToken() {
  return "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJfaWQiOiI1ZDg1MjQ3ZDMxNjA3MDRjYzVjNWE5MmYiLCJ1c2VybmFtZSI6InZpc3dhbnRoIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInR5cGUiOjEsInN0YXR1cyI6dHJ1ZSwiX192IjowfV0sImlhdCI6MTU2OTkzODc4NSwiZXhwIjoxNTY5OTQyMzg1fQ.oyt3cI-Ut3gpLYQ7bzBF1KIbOfxv9ee2QBw85yizafI";
}

function getHeaders(url) {
  return url.includes("login")
    ? {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    : {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: getJwtToken(),
      };
}

function getUrl(url) {
  return `http://localhost:8081${url}`;
}

/**
 * Base functionality for the server request communications (GET, POST, ...).
 * @type {{get: (function()), postPutDelete: (function()), post: (function()), put: (function()), delete: (function())}}
 */
const serviceBase = {
  get: async (url) => {
    credentials.headers = getHeaders(url);
    let response = await fetch(getUrl(url), credentials);
    response = await checkStatus(response);

    return response.json();
  },

  postPutDelete: async (url, method, request) => {
    const options = {
      headers: getHeaders(url),
      method: method,
      body: JSON.stringify(request),
    };

    let response = await fetch(
      getUrl(url),
      Object.assign(options, credentials)
    );
    response = await checkStatus(response);

    return response.json();
  },

  post: (url, request) => serviceBase.postPutDelete(url, "POST", request),

  put: async (url, request) => serviceBase.postPutDelete(url, "PUT", request),

  delete: (url, request) => serviceBase.postPutDelete(url, "DELETE", request),
};

export default serviceBase;
