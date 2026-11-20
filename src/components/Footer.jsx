import { MessageCircle, ArrowUpRight } from 'lucide-react';
import './Footer.scss';

function Footer() {
    const phoneNumber = '919652274756';

    const message = encodeURIComponent(
        "Hi! I came across your wedding invitation website and I'm interested in creating a website of my own.",
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <footer className="marketing-footer">
            <div className="marketing-footer-content">
                <p className="marketing-footer-eyebrow">
                    MADE WITH LOVE & CREATIVITY
                </p>

                <h2>
                    Every love story deserves
                    <br />
                    <span>a beautiful beginning.</span>
                </h2>

                <p className="marketing-footer-description">
                    Your special moments deserve more than an invitation.
                    Let’s create a beautiful digital experience that
                    people will remember.
                </p>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="marketing-footer-button"
                >
                    <MessageCircle size={18} />
                    Contact Us
                    <ArrowUpRight size={16} />
                </a>
            </div>

            <div className="marketing-footer-bottom">
                <span>Crafted with passion ✦</span>
                <span>Digital experiences made memorable.</span>
            </div>
        </footer>
    );
}

export default Footer;