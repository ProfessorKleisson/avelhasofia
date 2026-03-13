import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { BookSection } from "../components/BookSection";
import { ExcerptSection } from "../components/ExcerptSection";
import { ContextSection } from "../components/ContextSection";
import { PrisonSection } from "../components/PrisonSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { CharacterSection } from "../components/CharacterSection";
import { InstagramGenerator } from "../components/InstagramGenerator";
import { QuotesCarousel } from "../components/QuotesCarousel";
import { PricingSection } from "../components/PricingSection";
import { ReaderGallery } from "../components/ReaderGallery";
import { Footer } from "../components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";

export function BruxaDasMaquinasPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-charcoal selection:bg-emerald selection:text-charcoal mt-0 pt-0">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-emerald z-[60] origin-left"
                style={{ scaleX }}
            />

            <main>
                <Hero />
                <div id="sinopse">
                    <BookSection />
                </div>
                <ReviewsSection />
                <ReaderGallery />
                <div id="pre-venda">
                    <PricingSection />
                </div>
                <Features />
                <div id="trecho">
                    <ExcerptSection />
                </div>
                <ContextSection />
                <PrisonSection />
                <CharacterSection />
                <QuotesCarousel />
            </main>

            <Footer />
            {((import.meta as any).env?.DEV) && <InstagramGenerator />}
        </div>
    );
}
