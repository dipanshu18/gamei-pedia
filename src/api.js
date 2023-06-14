//Base URL
const BASE_URL = "https://api.rawg.io/api/";
const API_KEY = "7ed5042ed6f04ec892b72acd103f83c4";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () =>
  `${BASE_URL}games?key=${API_KEY}${popular_games}`;
export const upcomingGamesURL = () =>
  `${BASE_URL}games?key=${API_KEY}${upcoming_games}`;
export const newGamesURL = () => `${BASE_URL}games?key=${API_KEY}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${BASE_URL}games/${game_id}?key=${API_KEY}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?key=${API_KEY}`;
//Searched game
export const searchGameURL = (game_name) =>
  `${BASE_URL}games?key=${API_KEY}&search=${game_name}&page_size=9`;
