const apiKey = '19710989-7d132287f37ef0bf3153ac7f1';

const apiService = {
  keyword: '',
  page: 1,

  fetchQuery() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.keyword}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(data => data.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },

  pageReset() {
    this.page = 1;
  },

  set query(newKeyword) {
    this.keyword = newKeyword;
  },
};

export default apiService;
