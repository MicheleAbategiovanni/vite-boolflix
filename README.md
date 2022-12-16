# Boolflix

The project is called Boolflix, and it is a web app that allows us to view the most popular film and TV series titles on the home page and, through a search, the possibility of searching for films or TV series.

Inside the home, we find a jumbotron with relative information on the most popular film or TV series selected by the user.

We have the possibility to search for a film or a TV series, through the search input located in the nav of the header which allows us to search for films or TV series that interest us, making a practical example, if we search for example for the word Future , our web app will search for movies and TV series that have the word FUTURE in their title.

## Functional

The logical functioning of the web app is very simple, that is, at startup it will make two API calls to the THEMOVIEDB service, where it will request the most popular FILMS AND TV SERIES at the moment.
Once the call has been made, it will be shown in the respective sections in the form of a card.
The cards inside will contain the various information extrapolated from the call made by the API, i.e. Title, original title, language, vote, overview.
This information will be displayed on hover over the card or click on it shown in the jumbotron.

In the case of research instead, our web app collects the value inserted in the input and keeps it saved in an assigned variable.
After that it will take this variable to use it in the search function, ie by adding the string saved in the variable, within our specific API call for the search of MOVIES AND SERIES.
So in summary after inserting the value in the search input, the value is assigned to a variable, which will then be passed to the search function which will be inserted into the address of the API call.
At the end of the API call we will have the search values as a response, divided into two sections, FIlm and series.
When searching, the jumbotron disappears and therefore we will see the information of each single film or series through the hover on our card that contains it.
