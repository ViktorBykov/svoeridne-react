import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../components/services/apiService";
import StandardProductPage from "./standardProductPage";
import PremiumProductPage from "./premiumProductPage";

function ProductPage() {
  const { productSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);

    ApiService.getProductBySlug(productSlug)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [productSlug]);

  if (loading) return <p>Завантаження...</p>;

  return product.isPremiumProduct ? (
    <PremiumProductPage product={product} />
  ) : (
    <StandardProductPage product={product} />
  );
}

export default ProductPage;
