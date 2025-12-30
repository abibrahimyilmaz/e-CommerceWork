
import BestsellerProducts from "../components/BestsellerProducts";
import Clients from "../components/Clients";
import FeaturedContent from "../components/FeaturedContent";
import FeaturedPosts from "../components/FeaturedPosts";
import Features from "../components/Features";
import ShopCards from "../components/ShopCards";
import { brands } from "../mocks/brands";
import { products } from "../mocks/products";
import { shopCards } from "../mocks/shopCards";
import { posts } from "../mocks/posts"

export default function Home() {
    return (
        <>
            <Clients brands={brands} />
            <ShopCards cards={shopCards} />
            <BestsellerProducts products={products} />
            <FeaturedContent />
            <Features />
            <FeaturedPosts posts={posts} />
        </>
    );
}