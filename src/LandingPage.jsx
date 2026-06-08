import { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const features = [
    {
      title: "Психологічна підтримка",
      description: "Навчіться ефективно впоровуватися з тривожністю та стресом за допомогою науково обґрунтованих методів.",
      icon: "🧠"
    },
    {
      title: "Практичні техніки",
      description: "Отримайте практичні інструменти для саморегуляції та підвищення емоційної стабільності.",
      icon: "🎯"
    },
    {
      title: "Підтримка в процесі",
      description: "Доступ до групи підтримки та індивідуальних консультацій для підтримки у навчанні.",
      icon: "🤝"
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Сила без напруги</h1>
          <p className="hero-subtitle">
            Психологічний курс для тих, хто хоче навчитися впоровуватися з тривожністю та стресом
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">Записатись на курс</button>
            <button className="cta-button secondary">Дізнатись більше</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">Психологічний курс</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Що ви отримаєте</h2>
        <p className="features-subtitle">Навчальна програма, яка допоможе вам досягти емоційної стабільності та внутрішнього спокою</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact">
        <h2>Записатись на курс</h2>
        <p className="contact-subtitle">Залишіть свої контактні дані, і ми зв'яжемося з вами для оформлення запису</p>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className="success-message">
                Дякуємо за вашу заявку! Ми зв'яжемося з вами найближчим часом.
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Ім'я</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Повідомлення</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Надіслати заявку
                </button>
              </>
            )}
          </form>
          <div className="contact-info">
            <h3>Контактна інформація</h3>
            <p>Маєте питання щодо курсу? Зв'яжіться з нами!</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">info@silabesnugy.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Телефон:</span>
                <span className="contact-value">+380 12 345 67 89</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Адреса:</span>
                <span className="contact-value">м. Київ, вул. Психологічна, 123</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;