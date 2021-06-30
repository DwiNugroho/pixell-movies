import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { IMovieList } from '@/store/movie/models';

import Search from '@/components/molecules/Search';
import MovieCard from '@/components/molecules/MovieCard';
import ImagePreview from '@/components/molecules/ImagePreview';
import LoadOnScroll from '@components/molecules/LoadOnScroll';

export interface Props extends RouteComponentProps {
  getAllMovies: (keyword: string) => Promise<any>;
  changeMovieListState: (payload: IMovieList) => void;
  movieList: IMovieList;
}

const SearchPage: React.FC<Props> = ({
  history,
  location,
  getAllMovies,
  changeMovieListState,
  movieList,
}) => {
  const params = new URLSearchParams(location.search);
  const keyword = params.get('keyword') || '';

  const [hashMore, setHashMore] = React.useState(false);

  const [imgPreview, setImgPreview] = React.useState('');

  React.useEffect(() => {
    changeMovieListState({ Search: [] });
    getAllMovies(keyword);
  }, [keyword]);

  const loadMore = () => {
    // console.log((movieList.Search || [])?.length);
    if (
      movieList.Response === 'False' ||
      (movieList.Search || []).length <= 0 ||
      (movieList.Search || [])?.length >=
        parseInt(movieList.totalResults || '0')
    ) {
      return;
    }

    const page = parseInt(movieList.Page || '0') + 1;

    changeMovieListState({ Page: page.toString() });
    getAllMovies(keyword).finally(() => {
      setHashMore((movieList.Search || []).length > 0);
    });
  };

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

            {movieList.loading ? (
              Array.from(Array(10), (item, index) => (
                <section
                  key={index}
                  className="flex__item flex__item--12 flex__item--md-6 flex__item--xl-4"
                >
                  <div
                    className="width--100 skeleton"
                    style={{ minHeight: '400px' }}
                  ></div>
                  <div
                    className="width--75 skeleton mt-3"
                    style={{ minHeight: '32px' }}
                  ></div>
                  <div
                    className="width--45 skeleton mt-3"
                    style={{ minHeight: '32px' }}
                  ></div>
                  <div
                    className="width--55 skeleton mt-3"
                    style={{ minHeight: '32px' }}
                  ></div>
                </section>
              ))
            ) : (
              <></>
            )}
          </section>
        )}
        <LoadOnScroll
          loading={
            movieList.loading ||
            (movieList.Search || [])?.length >=
              parseInt(movieList.totalResults || '0')
          }
          hashMore={hashMore}
          onLoad={() => {
            loadMore();
          }}
        />
      </section>
      <ImagePreview img={imgPreview} onHide={() => setImgPreview('')} />
    </section>
  );
};

export default withRouter(SearchPage);
