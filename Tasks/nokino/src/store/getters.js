export const getters = {
  getFilmDetails: state => state.filmDetails,
  getCurrentFilmPage: state => state.filmPage,
  getForwardBtnStatus: state => state.btnNextPageStatus,
  getBackwardBtnStatus: state => state.btnPrevPageStatus,
  getTotalPages: state => state.rawObj.total_pages,
};
