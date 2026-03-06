"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Flower, Gift, Palette, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmall"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Inoday"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Collections", id: "collections" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Crafted Beauty for Every Moment"
          description="Handcrafted floral arrangements that bring nature's elegance to your celebrations and special occasions"
          tag="Premium Floristry"
          imageSrc="http://img.b2bpic.net/free-photo/decoration-artificial-flower_1232-2043.jpg"
          imageAlt="Premium floral arrangement"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Explore Collections", href: "collections" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Celebrating Nature's Artistry" },
            { type: "image", src: "http://img.b2bpic.net/free-vector/stunning-line-art-floral-logo-backgrounds-branding-identity_1017-60672.jpg", alt: "Inoday Studio Logo" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Our Story", href: "#about" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFive
          title="Our Services"
          description="Comprehensive floral design solutions for weddings, events, and everyday moments"
          tag="Floristry Excellence"
          features={[
            {
              title: "Wedding Arrangements",              description: "Stunning bridal bouquets and ceremony installations tailored to your vision",              icon: Flower,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/wedding-bouquet-white-roses-with-paniculata_24972-170.jpg", imageAlt: "Wedding bridal bouquet" },
                { imageSrc: "http://img.b2bpic.net/free-photo/floral-place-holiday-event_8353-9854.jpg", imageAlt: "Wedding ceremony flowers" }
              ]
            },
            {
              title: "Event Floristry",              description: "Elegant floral designs for corporate events, celebrations, and special gatherings",              icon: Sparkles,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/little-bouquet-pink-roses-put-glass-vase_1304-4691.jpg", imageAlt: "Event table centerpiece" },
                { imageSrc: "http://img.b2bpic.net/free-photo/vase-with-message-love_23-2147583289.jpg", imageAlt: "Event floral installation" }
              ]
            },
            {
              title: "Subscription Boxes",              description: "Curated weekly or monthly fresh flower deliveries to brighten your home",              icon: Gift,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-flowers-like-gardenzia-tulip-roses-with-gift-box-isolated-wooden-background_141793-52953.jpg", imageAlt: "Flower subscription box" },
                { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-flowers_23-2149247582.jpg", imageAlt: "Fresh flower delivery" }
              ]
            },
            {
              title: "Custom Designs",              description: "Personalized arrangements crafted specifically for your unique preferences",              icon: Palette,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/fresh-flower-vases-desk-against-white-backdrop_23-2148075439.jpg", imageAlt: "Custom floral design" },
                { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-fresh-flowers-flora-shop-work-space-business_53876-23097.jpg", imageAlt: "Inoday studio workspace" }
              ]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="collections" data-section="collections">
        <ProductCardOne
          title="Featured Collections"
          description="Browse our curated selection of beautiful floral arrangements available for order"
          tag="Shop"
          products={[
            {
              id: "1",              name: "Emerald Garden",              price: "$85",              imageSrc: "http://img.b2bpic.net/free-photo/bouquet-flowers-ceramic-vase_114579-24655.jpg",              imageAlt: "Emerald garden arrangement"
            },
            {
              id: "2",              name: "Blush Romance",              price: "$95",              imageSrc: "http://img.b2bpic.net/free-vector/beautiful-floral-wreath-with-watercolor-pink-roses-dahlia-white-peony_20839-1744.jpg",              imageAlt: "Blush romance bouquet"
            },
            {
              id: "3",              name: "Sunset Gradient",              price: "$105",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-orange-rose-petals-concept_23-2148387945.jpg",              imageAlt: "Sunset gradient arrangement"
            },
            {
              id: "4",              name: "Tropical Paradise",              price: "$115",              imageSrc: "http://img.b2bpic.net/free-vector/collection-tropical-flowers_23-2147875413.jpg",              imageAlt: "Tropical paradise bouquet"
            }
          ]}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Loved by Our Clients"
          description="Hear from happy customers who trusted Inoday for their special moments"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "Bride",              company: "June 2024 Wedding",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/elegant-stylish-girl-summer-garden_1157-24469.jpg",              imageAlt: "happy bride with wedding flowers portrait"
            },
            {
              id: "2",              name: "James Chen",              role: "Event Planner",              company: "Corporate Events Inc",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/businessman_23-2147996569.jpg",              imageAlt: "professional man event planner portrait photo"
            },
            {
              id: "3",              name: "Emma Rodriguez",              role: "Regular Customer",              company: "Inoday Subscriber",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-curly-hair-receiving-bouquet-white-flowers_273609-22817.jpg",              imageAlt: "happy woman holding fresh flowers portrait"
            },
            {
              id: "4",              name: "David Thompson",              role: "Business Owner",              company: "Office Wellness Program",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-young-stylish-smiling-man-co-working-office-startup-freelancer-holding-using-tablet_285396-1774.jpg",              imageAlt: "business owner male portrait professional photo"
            }
          ]}
          kpiItems={[
            { value: "500+", label: "Happy Clients" },
            { value: "1000+", label: "Arrangements Created" },
            { value: "10", label: "Years of Excellence" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Order?"
          ctaDescription="Get in touch with us to book your custom floral arrangement or event design consultation"
          ctaIcon={Flower}
          ctaButton={{ text: "Schedule Consultation", href: "https://calendly.com" }}
          faqs={[
            {
              id: "1",              title: "What is your delivery radius?",              content: "We provide same-day delivery within a 15-mile radius of our studio. For locations beyond this area, we offer next-day delivery options."
            },
            {
              id: "2",              title: "Do you offer custom designs?",              content: "Absolutely! We specialize in custom arrangements. Simply share your color preferences, flower types, and budget, and our designers will create something unique for you."
            },
            {
              id: "3",              title: "What is your cancellation policy?",              content: "Cancellations made 48 hours before delivery are fully refundable. Cancellations within 48 hours may incur a 50% service fee."
            },
            {
              id: "4",              title: "How long do arrangements last?",              content: "With proper care, most fresh flower arrangements last 7-10 days. We include care instructions with every order."
            },
            {
              id: "5",              title: "Do you offer subscription services?",              content: "Yes! Our weekly and monthly subscription boxes deliver fresh arrangements right to your door with special pricing."
            }
          ]}
          useInvertedBackground={false}
          animationType="blur-reveal"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Inoday"
          copyrightText="© 2024 Inoday Flowers. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Weddings", href: "#services" },
                { label: "Events", href: "#services" },
                { label: "Subscriptions", href: "#services" },
                { label: "Custom Designs", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Collections", href: "#collections" },
                { label: "Contact", href: "#contact" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}