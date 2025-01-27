interface Props {
  params: { slug: string[] };
  searchParams: { sortBy: string };
}

const Slug = ({ params: { slug }, searchParams: { sortBy } }: Props) => {
  return (
    <div>
      <p>Products {slug}</p>

      <p>Products sort by : {sortBy}</p>
    </div>
  );
};

export default Slug;
