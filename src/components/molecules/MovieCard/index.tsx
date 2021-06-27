import * as React from 'react';

import './styles.scss';

export interface Props {
  children: React.ReactNode;
  thumbnail?: string;
  title?: string;
  type?: string;
  year?: string;
  onPreview?: (value: string) => void;
}

export const Search: React.FC<Props> = ({
  children,
  thumbnail,
  title,
  year,
  type,
  onPreview,
}) => {
  return (
    <section className="movie-card width--100">
      <section className="movie-card__thumbnail img-thumbnail">
        <section className="img-thumbnail__item img-thumbnail__image flex flex--align-center flex--justify-center background--quill-gray">
          {thumbnail && thumbnail !== 'N/A' ? (
            <img src={thumbnail} alt={title} />
          ) : (
            <></>
          )}
        </section>
        {thumbnail && thumbnail !== 'N/A' ? (
          <button
            className="img-thumbnail__item img-thumbnail__preview-cta"
            onClick={() => {
              onPreview && onPreview(thumbnail || '');
            }}
          >
            <h3 className="my-0 text--white">Preview</h3>
          </button>
        ) : (
          <section className="img-thumbnail__item flex flex--align-center flex--justify-center">
            <section className="flex__item">
              <h5 className="my-0 text--lighter-black">No Image Found</h5>
            </section>
          </section>
        )}
      </section>
      <section className="width--100">{children}</section>
      {type ? (
        <p className="text--light-black mt-2 mb-0">Type: {type || '-'}</p>
      ) : (
        <></>
      )}
      {year ? (
        <p className="text--light-black mt-2">Year: {year || '-'}</p>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Search;
