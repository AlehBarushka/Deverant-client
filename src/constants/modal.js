import { FaSadCry } from 'react-icons/fa';
import { GiTerror } from 'react-icons/gi';

export const MODAL_TITLE_ICON = {
  authError: <FaSadCry className='me-1' />,
  projectError: <GiTerror className='me-1' />,
};

export const MODAL_TITLE_TEXT = {
  authError: 'Authorization error!',
  projectError: 'Project error!',
  createProject: 'Create project',
};
