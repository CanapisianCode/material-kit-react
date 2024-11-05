// var usersService = {
//   endpoint: "https://api.remotebootcamp.dev/api/users",
// };
// // prettier-ignore
// var loginPayload = {
//     "email": "aroncanapa@gmail.com",
//     "password": "Sabioc4nd!date",
//     "tenantId": "U03EDA4NX3Q"
//   };

// //user login
// usersService.userLogin = (payload) => {
//   const config = {
//     method: "POST",
//     url: `${usersService.endpoint}/login`,
//     data: payload,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config);
// };

// //user register
// usersService.userRegister = (payload) => {
//   const config = {
//     method: "POST",
//     url: `${usersService.endpoint}/register`,
//     data: payload,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config);
// };

// usersService.currentUser = () => {
//   // console.log("check if user firing")
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/current`,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
//   };

//   return axios(config);
// };

// usersService.getUserById = (id) => {
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/${id}`,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
//   };

//   return axios(config);
// };

// usersService.logout = () => {
//   const config = {
//     method: "GET",
//     url: `${usersService.endpoint}/logout`,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
//   };

//   return axios(config);
// };
