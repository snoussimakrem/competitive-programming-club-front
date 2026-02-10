import React from 'react';
import Navbar from '../components/Navbar';
import GalleryHero from '../components/GalleryHero';
import DomeGallery from '../components/DomeGallery';
import GalleryCTA from '../components/GalleryCTA';
import Footer from '../components/Footer';
import '../styles/Gallery.css';

const Gallery = () => {
  // Images de clubs de photographie/programmation avec informations
  const clubImages = [
    {
      src: '/img/481455796_616513547688169_2119441690931867963_n.jpg',
      alt: 'Code & Capture Club',
      club: 'Code & Capture',
      description: 'Documenting the journey of competitive programming through photography'
    },
    {
      src: '/img/481455796_616513547688169_2119441690931867963_n.jpg',
      alt: 'Algorithm Lens Club',
      club: 'Algorithm Lens',
      description: 'Capturing the beauty of code and algorithms in visual form'
    },
    {
      src: '/img/547085418_770140862325436_2125298334288132874_n.jpg',
      alt: 'Debug Frames Club',
      club: 'Debug Frames',
      description: 'Photography meets programming - debugging life one frame at a time'
    },
    {
      src: '/img/547085418_770140862325436_2125298334288132874_n.jpg',
      alt: 'Binary Vision Club',
      club: 'Binary Vision',
      description: 'Seeing the world through 0s and 1s, captured through lenses'
    },
    {
      src: '/img/547085418_770140862325436_2125298334288132874_n.jpg',
      alt: 'Compile & Click Club',
      club: 'Compile & Click',
      description: 'Where code compiles and cameras click - a perfect fusion'
    },
    {
      src: '/img/554772173_775727991766723_3202847544026491349_n.jpg',
      alt: 'Pixel Programmers Club',
      club: 'Pixel Programmers',
      description: 'Programming pixels both in code and through photography'
    },
    {
      src: '/img/556916212_778009138205275_5615021893157367682_n.jpg',
      alt: 'Code Snapshots Club',
      club: 'Code Snapshots',
      description: 'Freezing moments of innovation and creativity in competitive programming'
    },
    {
      src: '/img/556916212_778009138205275_5615021893157367682_n.jpg',
      alt: 'Tech Frames Club',
      club: 'Tech Frames',
      description: 'Framing technology and talent through artistic photography'
    },
    {
      src: '/img/557275545_122152452734744006_6888031797457733644_n.jpg',
      alt: 'Syntax Shooters Club',
      club: 'Syntax Shooters',
      description: 'Shooting code and capturing coding culture'
    },
    {
      src: '/img/557275545_122152452734744006_6888031797457733644_n.jpg',
      alt: 'Loop & Lens Club',
      club: 'Loop & Lens',
      description: 'Infinite loops of creativity through photography and code'
    },
    {
      src: '/img/557429510_778009181538604_8115492630320829953_n.jpg',
      alt: 'Digital Exposures Club',
      club: 'Digital Exposures',
      description: 'Exposing the digital world through photography'
    },
    {
      src: '/img/557429510_778009181538604_8115492630320829953_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/558672646_122153357090744006_5927956146218976430_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/558672646_122153357090744006_5927956146218976430_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/559097483_122153876798744006_2068792437429001328_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/559097483_122153876798744006_2068792437429001328_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/559679579_122152452950744006_8748129157472667080_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/559679579_122152452950744006_8748129157472667080_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/593075470_1253138830181253_2029155176635538495_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
    {
      src: '/img/593075470_1253138830181253_2029155176635538495_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
    ,
   
    
    {
      src: '/img/598189599_1774241643248871_7890490216885764949_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/598189599_1774241643248871_7890490216885764949_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    },
    {
      src: '/img/598189599_1774241643248871_7890490216885764949_n.jpg',
      alt: 'Code Focus Club',
      club: 'Code Focus',
      description: 'Keeping our focus sharp on both code and composition'
    }
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      
      <main>
        <GalleryHero />
        
        <section className="gallery-dome-section">
          <div className="dome-container">
            <DomeGallery 
              images={clubImages}
              fit={0.5}
              minRadius={600}
              maxRadius={900}
              overlayBlurColor="#0f172a"
              maxVerticalRotationDeg={8}
              dragSensitivity={20}
              enlargeTransitionMs={400}
              segments={35}
              dragDampening={2}
              openedImageWidth="400px"
              openedImageHeight="500px"
              imageBorderRadius="20px"
              openedImageBorderRadius="24px"
              grayscale={false}
            />
          </div>
        </section>
        
        <GalleryCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;