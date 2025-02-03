const ImageGrid = ({ images }) => {
  if (images.length === 1) {
    return (
      <div className="w-full flex justify-center">
        <div
          className="w-full h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: images[0] ? `url(${images[0]})` : undefined,
          }}
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[300px] bg-cover bg-center"
            style={{ backgroundImage: image ? `url(${image})` : undefined }}
          />
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[300px] bg-cover bg-center"
            style={{ backgroundImage: image ? `url(${image})` : undefined }}
          />
        ))}
      </div>
    );
  }

  if (images.length >= 4) {
    return (
      <div className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="w-full h-[300px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` || "" }}
            />
          ))}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {images.slice(3).map((image, index) => (
            <div
              key={index + 3}
              className="w-full h-[300px] bg-cover bg-center"
              style={{ backgroundImage: image ? `url(${image})` : undefined }}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default ImageGrid;
