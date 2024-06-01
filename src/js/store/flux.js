const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favoritos: [], //Array para almacenar los favoritos
			likes: 0 //Contador de likes
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},
			//agregar un favorito
			addFavorite: item => {
				const store = getStore();

				if (!store.favoritos.includes(item)) {

					setStore({
						favoritos: [...store.favoritos, item],
					});
	
					setStore({
						likes: store.likes + 1
					});

				}
			},
			removeFavorite: item => {
				const store = getStore();
				const index = store.favoritos.indexOf(item);
				if (index > -1) {
				
					const updatedFavorites = [
						...store.favoritos.slice(0, index), 
						...store.favoritos.slice(index + 1) 
					];
					setStore({ favoritos: updatedFavorites });
					setStore({
						likes: store.likes - 1
					});

				}
			}

		
		}
	};
};

export default getState;
