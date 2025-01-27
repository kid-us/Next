interface Props {
  params: { slug: string[] };
}

const Slug = ({ params: { slug } }: Props) => {
  return (
    <div>
      <p>Products {slug}</p>
    </div>
  );
};

export default Slug;
