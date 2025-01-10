const ProductsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return (
    <div>
      <p>Products Pages {slug}</p>
    </div>
  );
};

export default ProductsPage;
