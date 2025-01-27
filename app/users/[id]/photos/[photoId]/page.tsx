interface Props {
  params: { id: number; photoId: number };
}
const PhotoIdPage = ({ params: { photoId, id } }: Props) => {
  return (
    <div>
      <p>
        Photo Id is : {photoId} and User id is : {id}
      </p>
    </div>
  );
};

export default PhotoIdPage;
