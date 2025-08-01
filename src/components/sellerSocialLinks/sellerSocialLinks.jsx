import {
  FacebookIcon,
  TelegramIcon,
  ViberIcon,
  InstapaperIcon,
} from 'react-share';

const icons = {
  facebook: <FacebookIcon size={32} round />,
  telegram: <TelegramIcon size={32} round />,
  viber: <ViberIcon size={32} round />,
  instagram: <InstapaperIcon size={32} round />,
};

function SellerSocialLinks({ socialLinks }) {
  if (!socialLinks || socialLinks.length === 0) {
    return null;
  }

  return (
    <>
      <p className="item-details-title">Соціальні мережі</p>
      {socialLinks.map((el, index) => (
        <a key={index} href={el.url} target="_blank" rel="noopener noreferrer">
          {icons[el.type]}
        </a>
      ))}
    </>
  );
}

export default SellerSocialLinks;
