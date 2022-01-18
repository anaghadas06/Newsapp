let home = [];
let fav = [];
function gethome() {
	return fetch('http://localhost:4200/home').then(
		response =>{
		  if(response.ok){         
				  return response.json();          
		  }
		  else if(response.status == 404){
			  return Promise.reject(new Error('Invalid URL'))
		  }
		  else if(response.status == 401){
			  return Promise.reject(new Error('UnAuthorized User...'));
		  }
		  else{
			  return Promise.reject(new Error('Internal Server Error'));
		  } }).then(homeListResponse =>{
			home = homeListResponse;  
			  displayhomeList(home);
			  return homeListResponse;
	  	}).catch(error =>{const errorEle = document.getElementById('error');
			errorEle.innerHTML = `<h2 style='color:red'>${error.message}</h2>`
			return error;
	  	})
}

function getfav() {
	return fetch('http://localhost:4200/fav').then(response =>{
		  if(response.ok){         
				  return response.json();          
		  }
		  else if(response.status == 404){
			  return Promise.reject(new Error('Invalid URL'))
		  }
		  else if(response.status == 401){
			  return Promise.reject(new Error('UnAuthorized User...'));
		  }
		  else{
			  return Promise.reject(new Error('Internal Server Error'));
		  }}).then(favouriteHomeResponse =>{
			fav = favouriteHomeResponse;  
			displayFavouriteHome(favouriteNews);
			return favouriteHomResponse;
		}).catch(error =>{
			const errorEle = document.getElementById('errorFavouriteNews');
			errorEle.innerHTML = `<h2 style='color:red'>${error.message}</h2>`
			return error;
	  	}
	  )
}

function addFavourite(id) {
    let newsName = home.find(news =>{
        if(home.id == id){
            return news;
        }
    });
    let favExists = favouriteNews.find(favN => {
        if( favHome.id == homeName.id ){
            return favMovie;
        }
    });
    if(favExists) {
        return Promise.reject(new Error('it is already added to favourites'));
    }else{
		return fetch(`http://localhost:3000/favourites`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(homeName)
		}
		).then(response => {
				if(response.ok){
					return response.json();
				}
			}
		).then(addedHome => {
				favouriteHome.push(addedHome);
				displayFavouriteMovies(favouriteHome);
				return favouriteHome;
			}
		)
	}
}

function displayhomeList(HomeList){
	const ele =   document.getElementById('homeList');
	let htmlString = '';
	
	homeList.forEach(home => {
		htmlString += `
        SerialNumber<li>${home.id}</li>
			  Title<li>${home.title}</li>
        <img src='${movie.posterPath}' />
        <li><button class='btn btn-primary' onclick='addFavourite(${movie.id})'>AddToFavourites</button><li>
		`
	});
  
	ele.innerHTML = htmlString;
}

function displayFavouriteMovies(favouriteMovies){
	//DOM manipulation
	const ele =   document.getElementById('favouritesList');
	let htmlString = '';
	
	favouriteMovies.forEach(movie => {
		htmlString += `
        SerialNumber<li>${movie.id}</li>
			  <li>${movie.title}</li>
			  <img src='${movie.posterPath}' />
		`
	});
  
	ele.innerHTML = htmlString;
}


module.exports = {
	getHome,
	getFavourites,
	addFavourite
};




