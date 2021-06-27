import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { IMovieList } from '@/store/movie/models';

import Search from '@/components/molecules/Search';
import MovieCard from '@/components/molecules/MovieCard';
import ImagePreview from '@/components/molecules/ImagePreview';

export interface Props extends RouteComponentProps {
  getAllMovies: (keyword: string) => Promise<any>;
  movieList: IMovieList;
}

const SearchPage: React.FC<Props> = ({
  history,
  location,
  getAllMovies,
  movieList,
}) => {
  const params = new URLSearchParams(location.search);
  const keyword = params.get('keyword') || '';

  const [imgPreview, setImgPreview] = React.useState('');

  React.useEffect(() => {
    getAllMovies(keyword);
  }, [keyword]);

  return (
    <section className="width--100 pb-5 mb-5">
      <section className="width--100 background--spring-wood py-5">
        <section className="container">
          <section className="width--100 mx-auto" style={{ maxWidth: '600px' }}>
            <Search
              onSearch={(value) => {
                history.push(`/search?keyword=${value}`);
              }}
              value={keyword || ''}
              block
            />
          </section>
          <h4 className="text--center text--light-black text--max-1-line">
            keyword: {keyword}
          </h4>
        </section>
      </section>
      <br />
      <br />
      <section className="container">
        {(movieList.Response || '') === 'False' ? (
          <h3 className="text--center text--light-black">Movie not found!</h3>
        ) : (
          <section className="flex flex--wrap">
            {(movieList.Search || []).map((item, index) => (
              <section
                key={index}
                className="flex__item flex__item--12 flex__item--md-6 flex__item--xl-4"
              >
                <MovieCard
                  thumbnail={item.Poster}
                  title={item.Title}
                  type={item.Type}
                  year={item.Year}
                  onPreview={(value) => {
                    setImgPreview(value);
                  }}
                >
                  <Link
                    className="movie-card__link"
                    to={`/movie/${item.imdbID}`}
                  >
                    <span title={item.Title}>
                      <h4 className="mt-3 text--max-2-line">{item.Title}</h4>
                    </span>
                  </Link>
                </MovieCard>
              </section>
            ))}
          </section>
        )}
      </section>
      <ImagePreview img={imgPreview} onHide={() => setImgPreview('')} />
    </section>
  );
};

export default withRouter(SearchPage);
