import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const mock = new MockAdapter(api);

mock.onPost("users").reply(config => {
  const data = JSON.parse(config.data)

  return [200, {
    token: 'N66FoTQB3Ws/XLh7u5qXWFFx21tELTRxxPQS4pxVfp5f=ww4KlrRbLdHLLw33uPt',
    phone: data.phone
  }]
});

mock.onPost("validation").reply(config => {
  const data = JSON.parse(config.data)

  if (data.code == null) {
    return [401]
  }

  return [200]
});

mock.onPost("company").reply(200);

mock.onPost("company/document/social-contract").reply(200);
mock.onPost("company/document/document").reply(200);
mock.onPost("company/document/selfie-document").reply(200);

export default api

