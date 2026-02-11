import '../styles/categories.css';
import webDevImg from '../assets/dev.jpg';
import designImg from '../assets/design.jpg';
import mobileAppImg from '../assets/mobile-app.jpg';
import marketingImg from '../assets/marketing.jpg';
import seoImg from '../assets/seo.jpg';
import writingImg from '../assets/writing.jpg';
import videoImg from '../assets/video.jpg';
import aiImg from '../assets/ai.jpg';
import gameImg from '../assets/game.jpg';
import photoImg from '../assets/photo.jpg';
import musicImg from '../assets/music.jpg';
import consultingImg from '../assets/consulting.jpg';

const categories = [
  { title: 'Web Development', img: webDevImg },
  { title: 'Graphic Design', img: designImg },
  { title: 'Mobile Apps', img: mobileAppImg },
  { title: 'Digital Marketing', img: marketingImg },
  { title: 'SEO Optimization', img: seoImg },
  { title: 'Content Writing', img: writingImg },
  { title: 'Video Editing', img: videoImg },
  { title: 'AI & Machine Learning', img: aiImg },
  { title: 'Game Development', img: gameImg },
  { title: 'Photography', img: photoImg },
  { title: 'Music', img: musicImg },
  { title: 'Consulting', img: consultingImg }
];

export default function Categories() {
  return (
    <section id="categories" className="categories">
      <h2>Popular Categories</h2>
      <div className="categories-container">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <div className="card-img-wrapper">
              <img src={cat.img} alt={cat.title} />
            </div>
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
