3-useMemo:-
->there are two files 3-useMemo & 3.1-util which holds the functionality of {IntialItem}
->3.1-util : a funtion which declare an array with a large size 29_999_999
-> when the button is clicked then it is going to run the statement_1 but as in react when a state is updated it is going to re-render the component again and again as clicked
-> while itializing the state for items statement_2 runs for the first time only
-> but the statement3 run every time during re-render thus causing a lag
-> statement3 : it is going to search through this huge amount of array for each new item and check that whether the item is selected or not ,
as the isSelected is set to {i === 29_999_998}
