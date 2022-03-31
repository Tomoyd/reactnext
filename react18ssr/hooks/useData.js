const createServerFetch = () => {
	let promise = null;
	let done = false;
	let data;
	return function fetchData() {
		if (done) {
			return data;
		}

		if (promise) {
			throw promise;
		}
		promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				promise = null;
				done = true;
				data = [1, 2, 3, 4];
				resolve();
			}, 5 * 1000);
		});
		throw promise;
	};
};

export const useData = createServerFetch();
