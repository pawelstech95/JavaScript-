export default {
  each(fn) {
      
    // each to nasza metoda pomocnicza
    this.get().forEach(fn); // stworzylismy nowa funkcje each i tam mamy fn ktora normalnie zrobilibysmy tutaj
  },
};
