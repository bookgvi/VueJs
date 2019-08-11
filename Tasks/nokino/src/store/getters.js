export const getters = {
  getFilmDetails: state => state.filmDetails,
  getMaxFilmPages: state => state.rawObj.total_pages,
  getCurrentFilmPage: state => state.filmPage,
};
