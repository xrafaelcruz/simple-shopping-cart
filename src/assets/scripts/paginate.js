function Paginate(totalItems, pageSize, maxPage, currentPage) {
  this.currentPage = 0;
  this.totalItems = 0;
  this.pageSize = 0;
  this.maxPages = 0;
  this.totalPages = 0;
  this.startPage = 0;
  this.endPage = 0;
  this.startIndex = 0;
  this.endIndex = 0;
  this.pages = [];

  this.init = function() {
    this.currentPage = currentPage || 0;
    this.totalItems = totalItems || 0;
    this.pageSize = pageSize || 10;
    this.maxPages = maxPage || 10;

    this.loadPaginate();
  };

  this.loadPaginate = function() {
    // calculate total pages
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);

    // ensure current page isn't out of range
    if (this.currentPage < 1) {
      this.currentPage = 1;
    } else if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    if (this.totalPages <= this.maxPages) {
      // total pages less than max so show all pages
      this.startPage = 1;
      this.endPage = this.totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2) - 1;
      if (this.currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        this.startPage = 1;
        this.endPage = this.maxPages;
      } else if (this.currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
        // current page near the end
        this.startPage = this.totalPages - this.maxPages + 1;
        this.endPage = this.totalPages;
      } else {
        // current page somewhere in the middle
        this.startPage = this.currentPage - maxPagesBeforeCurrentPage;
        this.endPage = this.currentPage + maxPagesAfterCurrentPage;
      }
    }

    // calculate start and end item indexes
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let arr = new Array(this.endPage + 1 - this.startPage);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(i);
    }

    this.pages = newArr.map(i => this.startPage + i);
    // this.pages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i)
  };

  return this.init();
}

export default Paginate;
