import * as React from 'react';

import './styles.scss';

export interface Props {
  img?: string;
  onHide?: () => void;
}

export const ImagePreview: React.FC<Props> = ({ img, onHide }) => {
  return img ? (
    <section className="img-preview flex flex--column">
      <section className="flex__item">
        <section
          className="container"
          style={{ height: '100vh', padding: '72px 16px' }}
        >
          <img
            className="img-preview__image"
            src={img}
            alt="image movie imdb"
          />
        </section>
      </section>
      <button
        type="button"
        className="img-preview__overlay cursor--pointer"
        onClick={() => {
          onHide && onHide();
        }}
      ></button>
      <button
        type="button"
        className="img-preview__hide cursor--pointer text--white"
        onClick={() => {
          onHide && onHide();
        }}
      >
        X
      </button>
    </section>
  ) : (
    <></>
  );
};

export default ImagePreview;
