import { createSlice, configureStore } from '@reduxjs/toolkit';
const states = createSlice({
  name: 'states',
  initialState: {
    appName:'Olinarom',
    iconColor: 'rgba(136, 191, 255, 1)',
    properties:[
      {
        title:'Property 1',
        description : 'Luxury Hotels.',
        price : 75000,
        categories : ['House','Negotiable'],
        isLiked : false,
        totalBedroom:4,
        totalBathRoom:3
      },
      {
        title:'Property 2',
        description : 'The awani residence',
        price : 55000,
        categories : ['Villa','For Sale'],
        isLiked : false,
        totalBedroom:6,
        totalBathRoom:4
      },
      {
        title:'Property 3',
        description : 'Gold Coast sea',
        price : 65000,
        categories : ['Appartmen','For Sale'],
        isLiked : false,
        totalBedroom:6,
        totalBathRoom:5
      },
      {
        title:'Property 4',
        description : 'CitraLand BSB city Semarang',
        price : 45000,
        categories : ['Villa','Negotiable'],
        isLiked : false,
        totalBedroom:5,
        totalBathRoom:3
      },
    ],
    blogs: [
      {
        title: 'blogs 1',
        date:'August 10, 2022'
      },
      {
        title: 'blogs 2',
        date:'July 17, 2022'
      },
      {
        title: 'blogs 3',
        date:'Junnu 12, 2021'
      },
    ]
  },
  reducers: {
    setLiked: (state,action) => {
      state.properties[action.payload.index].isLiked = action.payload.value 
    }
  }
})

export const actions = states.actions;
const store = configureStore({
  reducer : states.reducer
})

export default store;