import './styles/DesktopIcon.scss';

export default function DesktopIcon({ icon, name }) {
  const Icon = icon;

  return (
    <button type="button" className="desktop-icon">
      <div className="desktop-icon__icon">
        <Icon/>
      </div>
      <div className="desktop-icon__name">
        {name}
      </div>
    </button>
  )  
}
