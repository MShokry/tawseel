const initialState = {
  logging: false,
  token: null,
  logged: false,
  send: false,
  loading: false,
  splash: false,
  errors: {
    email: '',
    username: '',
    password: '',
    name: '',
    title: '',
    sallary: '',
    message: '',
    alertOK: false,
  }
};

/*
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  
  initialState.token = {
    ID: 153, photo: "", name: "username", username: "00966123456789",
    password: "e1ddd2997d6f3dc1dce755848d2636893e", active: "yes"
  };
  initialState.logged = true;  
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code

  initialState.token = {
    ID: 153, photo: "", name: "username", username: "00966123456789",
    password: "e1ddd2997d6f3dc1dce755848d2636893e", active: "yes"
  };
  initialState.logged = true;
}


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code  
  initialState.token = 
  {"ID":153,"name":"احمد\r\n","photo":"larg1528667459.jpg",
  "small_pic":"small1528667459.jpg","img":"","estore_name":"",
  "estore_ID":"","phone":"","email":"","username":"00966123456123",
  "password":"e1ddd2997d6f3dc1dce755848d2636893e","country":"",
  "fav":"","activity":"","address":"","Description":"","type":"trader",
  "active":"yes","add_date":"2018-05-28 12:47:08","last_ip":"",
    "last_time":"0000-00-00 00:00:00","lang":0,"sub_from_lang":0,
    "job":"","gender":"","governorates":"","update_date":"0000-00-00 00:00:00",
    "modified_date":"2018-08-08 19:50:28","supplier_name":"","supplier_phone":"",
    "supplier_email":"","section":"","map":"","work_from":"00:00:00",
    "work_to":"00:00:00","shippingCost":0,"commercial_registration":"",
    "tax_card":"","user_key":"","iphone_key":"","family_name":"","governorate":"",
    "company":"","Location":"","activation_code":1532790,"AccountType":""};
    initialState.logged = true;  
  }
  */

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Add User':
      return { ...state, logging: false, send: false, };
    case 'logging':
      return { ...state, logging: true, errors: {} };
    case 'loading':
      return { ...state, loading: true, errors: {} };
    case 'sending':
      return { ...state, send: true, errors: {} };
    case 'unlogging':
      return { ...state, send: false, logging: false, loading: false, errors: {} };
    case 'Forget':
      return { ...state, send: false, logging: false, loading: false, errors: { alertOK: true } };
    case 'Logout User Token':
      console.log('Logging out redux');
      return { ...initialState };
    case 'Login User':
      console.log('Logging', action.payload);
      return { ...state, logging: false, send: false, token: action.payload, logged: true };
    case 'my info':
      console.log('Logging', action.payload);
      return { ...state, logging: false, send: false, loading: false, token: action.payload, logged: true };
    case 'Login Error':
      console.log('Error in login XX##');
      return {
        ...state, logging: false, send: false, splash: true, errors: { message: action.payload }
      };
    default:
      return state;
  }
};
