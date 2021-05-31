import './styles/DesktopIconContainer.scss';
import DesktopIcon from './DesktopIcon';
import EnvelopeIcon from './icons/Envelope';

export default function DesktopIconContainer() {
  return (
    <div className="desktop-icon-container">
      <DesktopIcon icon={EnvelopeIcon} name="Messages"/>
      <DesktopIcon icon={EnvelopeIcon} name="System"/>
      <DesktopIcon icon={EnvelopeIcon} name="Sim"/>
    </div>
  )
}
