import { FilmData } from '../../types/film';

type VideoPlayerProps = {
  filmData: FilmData;
  videoRef: React.LegacyRef<HTMLVideoElement>;
}

function VideoPlayer({ filmData, videoRef }:VideoPlayerProps):JSX.Element {
  const { previewVideoLink } = filmData;

  return (
    <video
      ref={videoRef}
      src={previewVideoLink}
      muted
      loop
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default VideoPlayer;
