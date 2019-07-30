const initialState = {
	loading: false,
	settings: {},
	alert: false,
	alertOK: false,
	progrss: 0,
	requests: {},
	refresh: 0,
	logout: false,
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

export default (state = initialState, action) => {
	console.log('parts Actions', action.type);
	switch (action.type) {
		case 'clearSettings':
			return { ...initialState };
		case 'loading':
			return { ...state, loading: true };
		case 'logout':
			return { ...state, logout: true };
		case 'unloading':
			return { ...state, loading: false, alertOK: false, alert: false, errors: {} };
		case 'alertOK':
			return { ...state, loading: false, alertOK: true, errors: {} };
		case 'Progrss':
			return { ...state, progrss: action.payload };
		case 'unAlert':
			return { ...state, loading: false, alertOK: false, alert: false, errors: {} };
		case 'Add Part':
			return { ...state, loading: false, alertOK: true, errors: {} };
		case 'Add Offer':
			return { ...state, loading: false, alertOK: true, alert: false, errors: {} };
		case 'Get Settings':
			return { ...state, settings: action.payload, loading: false, errors: {} };
		case 'Refresh':
			return { ...state, refresh: action.payload };
		case 'Get Requests':
			if (state.refresh) {
				//return { ...state, requests: [...state.requests, action.payload], loading: false };
				return { ...state, requests: state.requests.concat(action.payload), loading: false };
			}
			return { ...state, requests: action.payload, loading: false };
		case 'Part Error':
			console.log('Error in login XX##');
			return {
				...state, loading: false, errors: { message: action.payload }
			};
		default:
			return state;
	}
};
