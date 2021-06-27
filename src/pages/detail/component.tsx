import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IMovieDetail } from '@/store/movie/models';

import MovieCard from '@/components/molecules/MovieCard';

export interface Props extends RouteComponentProps<{ id: string }> {
  getDetailMovie: (id: string) => Promise<any>;
  movieDetail: IMovieDetail;
}

const DetailPage: React.FC<Props> = ({
  getDetailMovie,
  movieDetail,
  match,
}) => {
  const { id } = match.params;

  React.useEffect(() => {
    getDetailMovie(id || '');
  }, []);

  return (
    <section className="width--100">
      <section
        className="width--100 background--spring-wood"
        style={{ minHeight: '240px' }}
      />
      <section className="container" style={{ marginTop: '-120px' }}>
        <section className="flex flex--column flex--lg-row flex--align-stretch">
          <section
            className="flex__item flex__item--12 flex__item--lg-3"
            style={{ marginTop: '-20px' }}
          >
            <MovieCard thumbnail={movieDetail.Poster}>
              <p className="mb-0 text--lighter-black">
                IMDB Rating:{' '}
                <span className="text--blue">{movieDetail.imdbRating}</span>
              </p>
              <p className="mb-0 mt-2 text--lighter-black">
                Release Year:{' '}
                <span className="text--blue">{movieDetail.Year}</span>
              </p>
              <p className="mb-0 mt-2 text--lighter-black">
                Director:{' '}
                <span className="text--blue">{movieDetail.Director}</span>
              </p>
              <p className="mb-0 mt-2 text--lighter-black">
                Box Office:{' '}
                <span className="text--blue">{movieDetail.BoxOffice}</span>
              </p>
            </MovieCard>
          </section>
          <div className="mx-2"></div>
          <section className="flex__item flex__item--12 flex__item--lg-9">
            <h2>{movieDetail.Title}</h2>
            <br />
            <h3 className="text--light-black">Plot</h3>
            <hr />
            <p className="text--light-black">{movieDetail.Plot}</p>
            <h3 className="text--light-black">Actors</h3>
            <hr />
            <p className="text--light-black">{movieDetail.Actors}</p>
            <h3 className="text--light-black">Genre</h3>
            <hr />
            <p className="text--light-black">{movieDetail.Genre}</p>
            <h3 className="text--light-black">Production</h3>
            <hr />
            <p className="text--light-black">{movieDetail.Production}</p>
            <h3 className="text--light-black">Writer</h3>
            <hr />
            <p className="text--light-black">{movieDetail.Writer}</p>
            <h3 className="text--light-black">Ratings</h3>
            <hr />
            <ul className="text--light-black">
              {(movieDetail.Ratings || []).map((item, index) => (
                <li key={index} className="mb-3">
                  {item.Source} :{' '}
                  <span className="text--blue">{item.Value}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default withRouter(DetailPage);
